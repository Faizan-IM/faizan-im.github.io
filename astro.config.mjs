// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// This repo is the GitHub *user* site (faizan-im.github.io), so the site lives
// at the domain root: site = the full origin, base = '/'.
// If this is ever moved to a *project* repo, switch to:
//   site: 'https://faizan-im.github.io', base: '/<repo>/'
// and build internal links from import.meta.env.BASE_URL.
//
// Tailwind v4 is wired via PostCSS (see postcss.config.mjs) rather than the
// @tailwindcss/vite plugin, which is currently incompatible with Astro 6's
// rolldown-vite resolver.
export default defineConfig({
  site: 'https://faizan-im.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
