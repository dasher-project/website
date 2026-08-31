// Fetches a pinned dasher-web WASM demo release artifact and unpacks it
// into public/demo/, so the site self-hosts a known-good demo instead of
// iframing the always-moving GitHub Pages deployment.
//
// Pin the version with DASHER_DEMO_VERSION (default below). The artifact
// is produced by dasher-web's wasm-release workflow on v* tags.

import { createWriteStream, existsSync, mkdirSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const version = process.env.DASHER_DEMO_VERSION || 'v0.2.8';
const outDir = path.join(root, 'public', 'demo');
const marker = path.join(outDir, 'VERSION');

const assetName = `dasher-wasm-demo-${version}.zip`;
const url = `https://github.com/dasher-project/dasher-web/releases/download/${version}/${assetName}`;
const zipPath = path.join(root, '.cache', assetName);

// Skip if the pinned version is already unpacked.
if (existsSync(marker) && existsSync(path.join(outDir, 'index.html'))) {
  const installed =
    statSync(marker).size > 0 ? (await import('node:fs')).readFileSync(marker, 'utf8').trim() : '';
  if (installed === version) {
    console.log(`demo ${version} already installed at public/demo/`);
    process.exit(0);
  }
}

mkdirSync(path.dirname(zipPath), { recursive: true });
mkdirSync(outDir, { recursive: true });

console.log(`downloading ${url}`);
const response = await fetch(url);
if (!response.ok) {
  console.error(
    `failed: HTTP ${response.status} — is dasher-web release ${version} published with asset ${assetName}?`
  );
  process.exit(1);
}
await (await import('node:stream')).promises.pipeline(response.body, createWriteStream(zipPath));

console.log('unpacking');
const unzip = spawnSync('unzip', ['-oq', zipPath, '-d', root], { stdio: 'inherit' });
if (unzip.status !== 0) {
  console.error('unzip failed');
  process.exit(1);
}
const staged = path.join(root, 'dasher-wasm-demo');
for (const entry of ['index.html', 'dasher-wasm-wrapper.js', 'wasm', 'BUILD']) {
  spawnSync('mv', [path.join(staged, entry), path.join(outDir, entry)], { stdio: 'inherit' });
}
spawnSync('rm', ['-rf', staged]);
(await import('node:fs')).writeFileSync(marker, version);
console.log(`demo ${version} installed at public/demo/`);
