/**
 * Generate public/sitemap.xml from the page registry in src/main.tsx.
 *
 * The page registry is the single source of truth for routes; this script
 * parses it (same regex the CI sitemap check uses) and writes a fresh
 * sitemap, so new pages can never drift out of the sitemap.
 *
 * Run as part of `npm run build` (prebuild step). Fails if no slugs are
 * found, so a refactor that changes the registry format is caught loudly
 * instead of silently producing an empty sitemap.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const mainTsx = fs.readFileSync(path.join(root, 'src', 'main.tsx'), 'utf8');

const slugs = [...mainTsx.matchAll(/\{slug:'([^']+)'/g)].map((m) => m[1]);
if (slugs.length === 0) {
  console.error('generate-sitemap: no slugs found in src/main.tsx — registry format changed?');
  process.exit(1);
}

const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (dupes.length) {
  console.error('generate-sitemap: duplicate slugs in registry:', dupes);
  process.exit(1);
}

const BASE = 'https://dhakalnirajan.github.io/axonweave/';
const urls = slugs.map((s) => `  <url><loc>${BASE}${s === 'index' ? '' : s}</loc></url>`);
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;

const out = path.join(root, 'public', 'sitemap.xml');
fs.writeFileSync(out, xml);
console.log(`generate-sitemap: wrote ${slugs.length} routes to public/sitemap.xml`);
