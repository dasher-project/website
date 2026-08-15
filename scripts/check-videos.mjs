#!/usr/bin/env node
// Checks that every YouTube video and playlist referenced anywhere in src/
// is still alive, using YouTube's oEmbed endpoint.
//
// - 200: video is public and embeddable
// - 401: video is public but embedding is disabled (warn; error if referenced
//   via an /embed/ URL or the videos page facade, since an iframe would fail)
// - 403/404: video is private or gone (error)
//
// Run with: npm run check:videos

import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const SRC_DIR = new URL('../src/', import.meta.url).pathname;
const SOURCE_EXTENSIONS = /\.(astro|md|mdx|json)$/;

const VIDEO_RE =
  /(?:youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|live\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/g;
const EMBED_RE = /youtube(?:-nocookie)?\.com\/embed\/([A-Za-z0-9_-]{11})/;
const PLAYLIST_RE = /youtube\.com\/playlist\?list=([A-Za-z0-9_-]{12,})/g;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function collectSourceFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectSourceFiles(full)));
    } else if (SOURCE_EXTENSIONS.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function scanSources() {
  const videos = new Map();
  const playlists = new Map();

  const record = (map, key, file, kind) => {
    if (!map.has(key)) map.set(key, []);
    map.get(key).push({ file, kind });
  };

  for (const file of await collectSourceFiles(SRC_DIR)) {
    const content = await readFile(file, 'utf8');
    const relPath = relative(process.cwd(), file);

    for (const match of content.matchAll(VIDEO_RE)) {
      const kind = EMBED_RE.test(match[0]) ? 'embed' : 'link';
      record(videos, match[1], relPath, kind);
    }
    for (const match of content.matchAll(PLAYLIST_RE)) {
      record(playlists, match[1], relPath, 'playlist');
    }

    // The videos page renders facades from data-video-id attributes / JSON ids
    // rather than URLs, so harvest those too.
    for (const match of content.matchAll(/data-video-id="([A-Za-z0-9_-]{11})"/g)) {
      record(videos, match[1], relPath, 'embed');
    }
    if (file.endsWith(join('data', 'videos.json'))) {
      const data = JSON.parse(content);
      for (const category of data.categories ?? []) {
        for (const video of category.videos ?? []) {
          record(videos, video.id, relPath, video.embedDisabled ? 'link' : 'embed');
        }
      }
    }
  }

  return { videos, playlists };
}

async function fetchStatus(url) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(url, {
        redirect: 'follow',
        signal: AbortSignal.timeout(15_000),
        headers: { 'User-Agent': 'dasher-web-link-checker (+https://dasher.at)' },
      });
      return response.status;
    } catch (error) {
      if (attempt === 3) {
        console.error(`ERROR  network failure for ${url}: ${error.message}`);
        return 0;
      }
      await sleep(1000 * attempt);
    }
  }
  return 0;
}

const oembedUrl = (target) =>
  `https://www.youtube.com/oembed?url=${encodeURIComponent(target)}&format=json`;

async function main() {
  const { videos, playlists } = await scanSources();

  console.log(
    `Checking ${videos.size} YouTube videos and ${playlists.size} playlists referenced in src/...\n`
  );

  let failures = 0;
  let warnings = 0;

  for (const [id, usages] of videos) {
    const status = await fetchStatus(oembedUrl(`https://www.youtube.com/watch?v=${id}`));
    const where = usages.map((u) => `${u.file} (${u.kind})`).join(', ');

    if (status === 200) {
      console.log(`OK     ${id}  ${where}`);
    } else if (status === 401) {
      const embedded = usages.some((u) => u.kind === 'embed');
      if (embedded) {
        console.error(`DEAD   ${id}  embedding disabled but referenced via /embed/ — ${where}`);
        failures++;
      } else {
        console.warn(`WARN   ${id}  embedding disabled, link-only — ${where}`);
        warnings++;
      }
    } else {
      console.error(`DEAD   ${id}  oEmbed returned ${status} — ${where}`);
      failures++;
    }
    await sleep(250);
  }

  for (const [id, usages] of playlists) {
    const status = await fetchStatus(oembedUrl(`https://www.youtube.com/playlist?list=${id}`));
    const where = usages.map((u) => u.file).join(', ');

    if (status === 200) {
      console.log(`OK     playlist ${id}  ${where}`);
    } else {
      console.error(`DEAD   playlist ${id}  oEmbed returned ${status} — ${where}`);
      failures++;
    }
    await sleep(250);
  }

  console.log(`\n${videos.size + playlists.size} checked: ${failures} dead, ${warnings} warnings.`);
  process.exit(failures > 0 ? 1 : 0);
}

main();
