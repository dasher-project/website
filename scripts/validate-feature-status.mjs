// Validates src/data/feature-status.json — the cross-platform capability matrix
// that is the single source of truth for https://dasher.at/status/
//
// Zero dependencies: the SSOT is JSON (not YAML), parsed with the built-in
// JSON parser. Run via: npm run validate:status  (also a CI gate).

import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const SOURCE = resolve(here, '..', 'src', 'data', 'feature-status.json');

const VALID_STATUSES = ['shipped', 'beta', 'planned', 'not-supported', 'n/a'];
const PLATFORM_KEY = /^[a-z][a-z0-9-]*$/;
const FEATURE_ID = /^[a-z][a-z0-9-]*$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const ALLOWED_ENTRY_KEYS = new Set(['status', 'version', 'issue', 'reason']);
const ALLOWED_FEATURE_KEYS = new Set([
  'id',
  'category',
  'title',
  'dasher_core_dep',
  'platforms',
  'v5',
  'notes',
]);

function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function validateEntry(entry, plat, platformSet, validStatuses, allowedKeys, where, errors) {
  if (!platformSet.has(plat)) {
    errors.push(`${where}."${plat}": not declared in top-level platforms list`);
  }
  if (!isObject(entry)) {
    errors.push(`${where}."${plat}": not an object`);
    return;
  }
  for (const key of Object.keys(entry)) {
    if (!allowedKeys.has(key)) {
      errors.push(`${where}."${plat}": unknown key "${key}"`);
    }
  }
  if (!validStatuses.includes(entry.status)) {
    errors.push(
      `${where}."${plat}".status: "${entry.status}" is not one of ${validStatuses.join(', ')}`
    );
  }
}

function validate(data) {
  const errors = [];

  if (!isObject(data)) {
    console.error('[feature-status] ✗ top level must be an object');
    process.exit(1);
  }

  const { meta, platforms, features } = data;

  // meta ----------------------------------------------------------------
  if (!isObject(meta)) {
    errors.push('meta: missing or not an object');
  } else {
    if (typeof meta.last_updated !== 'string' || !ISO_DATE.test(meta.last_updated)) {
      errors.push('meta.last_updated: must be a YYYY-MM-DD date');
    }
    if (!isObject(meta.status_legend)) {
      errors.push('meta.status_legend: missing or not an object');
    } else {
      for (const status of VALID_STATUSES) {
        if (typeof meta.status_legend[status] !== 'string') {
          errors.push(`meta.status_legend: missing description for "${status}"`);
        }
      }
      for (const key of Object.keys(meta.status_legend)) {
        if (!VALID_STATUSES.includes(key)) {
          errors.push(`meta.status_legend: unknown status "${key}"`);
        }
      }
    }
  }

  // platforms -----------------------------------------------------------
  if (!Array.isArray(platforms) || platforms.length === 0) {
    errors.push('platforms: must be a non-empty array');
  } else {
    const seen = new Set();
    platforms.forEach((p, i) => {
      if (typeof p !== 'string' || !PLATFORM_KEY.test(p)) {
        errors.push(`platforms[${i}]: invalid key "${p}"`);
      } else if (seen.has(p)) {
        errors.push(`platforms: duplicate "${p}"`);
      }
      seen.add(p);
    });
  }

  const platformSet = new Set(Array.isArray(platforms) ? platforms : []);

  // features ------------------------------------------------------------
  if (!Array.isArray(features)) {
    errors.push('features: must be an array');
  } else {
    const ids = new Set();
    features.forEach((f, i) => {
      const where = `features[${i}]`;
      if (!isObject(f)) {
        errors.push(`${where}: not an object`);
        return;
      }
      for (const key of Object.keys(f)) {
        if (!ALLOWED_FEATURE_KEYS.has(key)) {
          errors.push(`${where}: unknown key "${key}"`);
        }
      }
      if (typeof f.id !== 'string' || !FEATURE_ID.test(f.id)) {
        errors.push(`${where}.id: invalid (use kebab-case)`);
      } else if (ids.has(f.id)) {
        errors.push(`${where}.id: duplicate "${f.id}"`);
      }
      if (f.id) ids.add(f.id);
      if (typeof f.category !== 'string' || f.category.trim() === '') {
        errors.push(`${where}.category: required`);
      }
      if (typeof f.title !== 'string' || f.title.trim() === '') {
        errors.push(`${where}.title: required`);
      }
      if (!isObject(f.platforms)) {
        errors.push(`${where}.platforms: required object`);
        return;
      }
      for (const [plat, entry] of Object.entries(f.platforms)) {
        validateEntry(
          entry,
          plat,
          platformSet,
          VALID_STATUSES,
          ALLOWED_ENTRY_KEYS,
          `${where}.platforms`,
          errors
        );
      }

      // v5 (optional, same structure as platforms) ---------------------
      if (f.v5 !== undefined) {
        if (!isObject(f.v5)) {
          errors.push(`${where}.v5: must be an object`);
        } else {
          for (const [plat, entry] of Object.entries(f.v5)) {
            validateEntry(
              entry,
              plat,
              platformSet,
              VALID_STATUSES,
              ALLOWED_ENTRY_KEYS,
              `${where}.v5`,
              errors
            );
          }
        }
      }
    });
  }

  if (errors.length > 0) {
    console.error('[feature-status] validation failed:');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
}

async function main() {
  const raw = await readFile(SOURCE, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    console.error(`[feature-status] ✗ JSON parse error: ${err.message}`);
    process.exit(1);
  }
  validate(data);
  const count = data.features.length;
  console.log(`[feature-status] ✓ valid — ${count} features`);
}

main().catch((err) => {
  console.error('[feature-status] unexpected error', err);
  process.exit(1);
});
