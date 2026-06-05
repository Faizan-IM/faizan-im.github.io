// One-off generator for static branded assets (OG image + PNG favicons).
// Run with: node scripts/gen-assets.mjs
// Output PNGs are committed to /public, so this only needs re-running when the
// branding changes. SVG text uses web-safe fonts so rasterization is portable.
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');

const PAPER = '#faf8f3';
const INK = '#17150f';
const INK_SOFT = '#514c40';
const ACCENT = '#1f5c4d';
const AMBER = '#c8952e';

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.6" fill="${INK}" fill-opacity="0.05" />
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="${PAPER}" />
  <rect width="1200" height="630" fill="url(#dots)" />
  <rect x="0" y="0" width="1200" height="10" fill="${ACCENT}" />

  <!-- eyebrow -->
  <g font-family="Arial, Helvetica, sans-serif">
    <rect x="80" y="120" width="40" height="3" fill="${ACCENT}" />
    <text x="136" y="128" font-size="22" letter-spacing="4" fill="${ACCENT}" font-weight="700">BUILDER · RESEARCHER · EDUCATOR</text>
  </g>

  <!-- name -->
  <text x="78" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="76" fill="${INK}" letter-spacing="-1.5">Muhammad Faizan</text>
  <text x="78" y="382" font-family="Georgia, 'Times New Roman', serif" font-size="76" fill="${INK}" letter-spacing="-1.5">Iqbal Masood</text>

  <!-- tagline -->
  <text x="80" y="452" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="${INK_SOFT}">Turning complexity into something usable —</text>
  <text x="80" y="492" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="${INK_SOFT}">data systems, AI research, and O/A Level teaching.</text>

  <!-- footer -->
  <rect x="80" y="548" width="1040" height="2" fill="#e6e1d6" />
  <text x="80" y="588" font-family="'Courier New', monospace" font-size="22" fill="${INK_SOFT}">faizan-im.github.io</text>

  <!-- accent motif, top-right -->
  <g transform="translate(1010 120)">
    <rect x="0" y="0" width="18" height="18" rx="3" fill="${ACCENT}" />
    <rect x="28" y="0" width="18" height="18" rx="3" fill="${ACCENT}" fill-opacity="0.5" />
    <rect x="56" y="0" width="18" height="18" rx="3" fill="${AMBER}" />
    <rect x="0" y="28" width="18" height="18" rx="3" fill="${ACCENT}" fill-opacity="0.5" />
    <rect x="28" y="28" width="18" height="18" rx="3" fill="${AMBER}" fill-opacity="0.6" />
    <rect x="56" y="28" width="18" height="18" rx="3" fill="${ACCENT}" />
    <rect x="0" y="56" width="18" height="18" rx="3" fill="${AMBER}" fill-opacity="0.5" />
    <rect x="28" y="56" width="18" height="18" rx="3" fill="${ACCENT}" />
    <rect x="56" y="56" width="18" height="18" rx="3" fill="${ACCENT}" fill-opacity="0.4" />
  </g>
</svg>`;

await sharp(Buffer.from(ogSvg)).png().toFile(join(pub, 'og.png'));
console.log('✓ public/og.png (1200×630)');

const faviconSvg = await readFile(join(pub, 'favicon.svg'));
await sharp(faviconSvg, { density: 384 }).resize(32, 32).png().toFile(join(pub, 'favicon-32.png'));
console.log('✓ public/favicon-32.png');
await sharp(faviconSvg, { density: 512 }).resize(180, 180).png().toFile(join(pub, 'apple-touch-icon.png'));
console.log('✓ public/apple-touch-icon.png');
