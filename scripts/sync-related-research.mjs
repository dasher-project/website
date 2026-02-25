import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const BIB_URL = 'https://paperpile.com/eb/VDzRdyJpus';
const SHARED_PAGE_URL = 'https://paperpile.com/shared/sfRoEJyQ5QA2Oe4GSpZo2~A';
const OUTPUT_PATH = 'src/data/related-research.json';

const MONTH_ORDER = {
  jan: 1,
  feb: 2,
  mar: 3,
  apr: 4,
  may: 5,
  jun: 6,
  jul: 7,
  aug: 8,
  sep: 9,
  oct: 10,
  nov: 11,
  dec: 12,
};

function cleanValue(value) {
  return value
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\\&/g, '&')
    .trim();
}

function parseMonth(rawMonth) {
  if (!rawMonth) return 0;
  const normalized = cleanValue(rawMonth).toLowerCase();
  if (MONTH_ORDER[normalized]) return MONTH_ORDER[normalized];
  const numeric = Number.parseInt(normalized, 10);
  if (Number.isFinite(numeric) && numeric >= 1 && numeric <= 12) return numeric;
  return 0;
}

function extractBalanced(text, start, openChar, closeChar) {
  if (openChar === closeChar) {
    let i = start + 1;
    let escaped = false;
    for (; i < text.length; i += 1) {
      const ch = text[i];
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === '\\') {
        escaped = true;
        continue;
      }
      if (ch === openChar) break;
    }

    return {
      value: text.slice(start, i + 1),
      end: i + 1,
    };
  }

  let i = start;
  let depth = 0;
  let escaped = false;

  for (; i < text.length; i += 1) {
    const ch = text[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (ch === '\\') {
      escaped = true;
      continue;
    }
    if (ch === openChar) depth += 1;
    if (ch === closeChar) {
      depth -= 1;
      if (depth === 0) break;
    }
  }

  return {
    value: text.slice(start, i + 1),
    end: i + 1,
  };
}

function parseFields(fieldsText) {
  const fields = {};
  let i = 0;

  while (i < fieldsText.length) {
    while (i < fieldsText.length && /[\s,]/.test(fieldsText[i])) i += 1;
    if (i >= fieldsText.length) break;

    let name = '';
    while (i < fieldsText.length && /[A-Za-z0-9_:-]/.test(fieldsText[i])) {
      name += fieldsText[i];
      i += 1;
    }
    name = name.trim().toLowerCase();

    while (i < fieldsText.length && /\s/.test(fieldsText[i])) i += 1;
    if (fieldsText[i] !== '=') {
      while (i < fieldsText.length && fieldsText[i] !== ',') i += 1;
      continue;
    }
    i += 1;

    while (i < fieldsText.length && /\s/.test(fieldsText[i])) i += 1;
    if (i >= fieldsText.length) break;

    let rawValue = '';
    if (fieldsText[i] === '{') {
      const extracted = extractBalanced(fieldsText, i, '{', '}');
      rawValue = extracted.value;
      i = extracted.end;
    } else if (fieldsText[i] === '"') {
      const extracted = extractBalanced(fieldsText, i, '"', '"');
      rawValue = extracted.value;
      i = extracted.end;
    } else {
      const start = i;
      while (i < fieldsText.length && fieldsText[i] !== ',') i += 1;
      rawValue = fieldsText.slice(start, i);
    }

    while (i < fieldsText.length && /\s/.test(fieldsText[i])) i += 1;
    if (fieldsText[i] === ',') i += 1;

    let normalized = rawValue.trim();
    if (
      (normalized.startsWith('{') && normalized.endsWith('}')) ||
      (normalized.startsWith('"') && normalized.endsWith('"'))
    ) {
      normalized = normalized.slice(1, -1);
    }
    fields[name] = normalized;
  }

  return fields;
}

function parseBibTeX(input) {
  const entries = [];
  let i = 0;

  while (i < input.length) {
    const atIndex = input.indexOf('@', i);
    if (atIndex === -1) break;

    const typeMatch = input.slice(atIndex + 1).match(/^([A-Za-z]+)/);
    if (!typeMatch) {
      i = atIndex + 1;
      continue;
    }
    const type = typeMatch[1].toLowerCase();

    const openBraceIndex = input.indexOf('{', atIndex);
    if (openBraceIndex === -1) break;

    const entryBody = extractBalanced(input, openBraceIndex, '{', '}');
    const inside = entryBody.value.slice(1, -1);
    const firstComma = inside.indexOf(',');

    if (firstComma === -1) {
      i = entryBody.end;
      continue;
    }

    const id = inside.slice(0, firstComma).trim();
    const fieldsText = inside.slice(firstComma + 1);
    const fields = parseFields(fieldsText);

    entries.push({ id, type, fields });
    i = entryBody.end;
  }

  return entries;
}

function toPaper(entry) {
  const { id, type, fields } = entry;
  const title = cleanValue(fields.title || '');
  const authors = cleanValue(fields.author || '');
  const year = Number.parseInt(cleanValue(fields.year || ''), 10) || null;
  const month = parseMonth(fields.month || '');
  const venue = cleanValue(
    fields.journal ||
      fields.booktitle ||
      fields.publisher ||
      fields.series ||
      fields.school ||
      '',
  );
  const doi = cleanValue(fields.doi || '');
  const url = cleanValue(fields.url || '');

  return {
    id,
    type,
    title,
    authors,
    venue,
    year,
    month,
    doi,
    url,
  };
}

function comparePapers(a, b) {
  const yearA = a.year || 0;
  const yearB = b.year || 0;
  if (yearA !== yearB) return yearB - yearA;

  const monthA = a.month || 0;
  const monthB = b.month || 0;
  if (monthA !== monthB) return monthB - monthA;

  return a.title.localeCompare(b.title);
}

async function readExistingData() {
  try {
    const raw = await readFile(OUTPUT_PATH, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeData(data) {
  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

async function syncRelatedResearch() {
  const response = await fetch(BIB_URL);
  if (!response.ok) {
    throw new Error(`Fetch failed (${response.status})`);
  }

  const bibtex = await response.text();
  const parsed = parseBibTeX(bibtex);
  const papers = parsed.map(toPaper).filter((paper) => paper.title).sort(comparePapers);

  const output = {
    sourceBibtexUrl: BIB_URL,
    sharedPageUrl: SHARED_PAGE_URL,
    generatedAt: new Date().toISOString(),
    count: papers.length,
    papers,
  };

  await writeData(output);
  return output;
}

async function main() {
  try {
    const data = await syncRelatedResearch();
    console.log(`Synced ${data.count} related research papers.`);
  } catch (error) {
    const cached = await readExistingData();
    if (cached?.papers?.length) {
      console.warn(
        `Related research sync failed (${error.message}). Using cached data (${cached.papers.length} papers).`,
      );
      return;
    }
    throw error;
  }
}

main().catch((error) => {
  console.error(`Related research sync failed: ${error.message}`);
  process.exitCode = 1;
});
