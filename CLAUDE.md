# Portfolio — project memory

Astro + Tailwind v4, static, deploy to GitHub Pages via GitHub Actions
(.github/workflows/deploy.yml using withastro/action). This is the **user site**
(faizan-im.github.io) → astro.config.mjs uses site: 'https://faizan-im.github.io',
base: '/'. (For a project repo it'd be base: '/<repo>/'.) Minimal, content-first
personal site for Faizan (solo software engineer, CS PhD scholar, O/A Level
Math & Physics tutor). Serves four audiences: SaaS clients, recruiters,
academics, tutoring families. One coherent site, four clear paths.

## Hard rules
- Never fabricate links, demos, metrics, or testimonials. Project repos are
  PRIVATE — do not link them (case studies show "Private — available on request").
  Only the GitHub profile is linked. Use src/consts.ts for any missing info; open
  items tracked in TODO.md.
- Research copy = professional/measured only. No dramatic internal language
  ("Sacred," "purged," "unyielding," etc.).
- Honor exact project status labels. Don't upgrade "active build" to "shipped"
  or call planning artifacts "live."
- Tutoring copy = plain and warm (parents/teens). Engineering copy = confident,
  technical. First person for hero/about/tutoring.

## Stack & conventions
- Astro 6, TypeScript strict, static output.
- Tailwind v4 via @tailwindcss/postcss (postcss.config.mjs) — NOT the vite plugin,
  which is incompatible with Astro 6's rolldown-vite. Design tokens as CSS
  variables in src/styles/global.css, exposed to Tailwind via @theme inline.
- Content Collections (src/content.config.ts, glob loader) for projects.
- Self-hosted Fontsource fonts (Fraunces / Hanken Grotesk / JetBrains Mono);
  only client JS is the theme toggle (no FOUC — theme set inline in <head>).
- Accessibility AA; respect prefers-reduced-motion; target Lighthouse 95+.
- All site config in src/consts.ts. Regenerate OG/favicons: node scripts/gen-assets.mjs.

## Design
- Minimal but intentional. Paper/ink palette + ONE accent (deep green). Mono "data"
  motif (tabular metrics, faint dot-grid). Fonts: Fraunces + Hanken Grotesk +
  JetBrains Mono (not Inter/Space Grotesk defaults).
