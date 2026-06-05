# Faizan — Portfolio

A fast, minimal, content-first personal site built with **Astro** + **Tailwind v4**,
serving four audiences from one coherent site: freelance/SaaS clients, recruiters,
research peers, and tutoring families.

- **Live:** https://faizan-im.github.io
- **Stack:** Astro 6 (static) · Tailwind v4 (via PostCSS) · self-hosted Fontsource fonts · TypeScript strict
- **Deploy:** GitHub Actions → GitHub Pages

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command | Action |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `node scripts/gen-assets.mjs` | Regenerate the OG image + PNG favicons (only when branding changes) |

## Project structure

```
src/
  consts.ts              # ← all site config (name, email, socials, tutoring). Edit here.
  content.config.ts      # projects content collection (Zod schema)
  content/projects/*.md  # one file per project case study
  components/            # Layout shell + reusable UI (cards, badges, metrics, CTA…)
  layouts/Layout.astro   # base shell: head + skip-link + nav + slot + footer
  pages/                 # routes (index, work, work/[slug], research, tutoring, about, contact, 404)
  styles/global.css      # design tokens (@theme), motif, prose, buttons
public/                  # static assets served as-is (robots.txt, og.png, favicons)
scripts/gen-assets.mjs   # one-off branded-asset generator
.github/workflows/deploy.yml  # CI: build + deploy to Pages on push to main
```

## Editing content

- **Site identity / links / tutoring details:** [`src/consts.ts`](src/consts.ts).
  Unknown values fall back gracefully — see [`TODO.md`](TODO.md).
- **Projects:** add or edit a Markdown file in `src/content/projects/`. Frontmatter
  is validated by the Zod schema in `src/content.config.ts`. `category` controls the
  group on `/work`, `order` controls sequence, `featured: true` surfaces it on the home page.
  Project repos are private — leave `links` empty and the case study shows
  *"Private — available on request."*

## Deploying to GitHub Pages (one-time setup)

1. Push to `main`. The workflow in `.github/workflows/deploy.yml`
   (`withastro/action` + `actions/deploy-pages`) builds and publishes `dist/`.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Done — every push to `main` redeploys. Watch progress under the **Actions** tab.

> This is a **user site** (`faizan-im.github.io`), so `astro.config.mjs` uses
> `site: 'https://faizan-im.github.io'` and `base: '/'`. If you ever move this to a
> *project* repo, switch `base` to `'/<repo>/'` and build internal links from
> `import.meta.env.BASE_URL`.
>
> Netlify/Vercel work as drop-in fallbacks (build `astro build`, publish `dist/`).

## Notes

- The only client-side JavaScript is the theme toggle; the site is fully functional
  without JS. Dark mode is set before first paint (no flash).
- `prefers-reduced-motion` disables all non-essential animation.
- Tailwind v4 runs through PostCSS (`postcss.config.mjs`) rather than the
  `@tailwindcss/vite` plugin, which is currently incompatible with Astro 6's
  rolldown-vite resolver.
