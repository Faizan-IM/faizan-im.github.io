/**
 * Central site configuration.
 *
 * Values were pre-filled from the owner's existing public site + repo where they
 * could be verified (name, email, GitHub, LinkedIn, domain). Genuinely-unknown
 * values are either `null` (the related UI is omitted gracefully) or a
 * graceful fallback string. Everything still open is tracked in /TODO.md.
 *
 * To change any value, edit it here once — it flows to every page.
 */

export const SITE = {
  /** {{FULL_NAME}} — from the owner's existing site title. */
  fullName: 'Muhammad Faizan Iqbal Masood',
  /** Short display / nav name. */
  shortName: 'Faizan',
  /** Used in <title>, JSON-LD jobTitle. */
  jobTitle: 'Software Engineer & Researcher',
  /** {{EMAIL}} — from the owner's existing public contact section. */
  email: 'mfaizanim@gmail.com',
  /** Phone in E.164 form (for tel: links). */
  phone: '+923136564449',
  /** Phone formatted for display. */
  phoneDisplay: '+92 313 6564449',
  /** WhatsApp click-to-chat (number without '+'). Append ?text= for a prefilled message. */
  whatsapp: 'https://wa.me/923136564449',
  /** {{SITE_DOMAIN}} — this repo is faizan-im.github.io (user site). No trailing slash. */
  domain: 'https://faizan-im.github.io',
  /** {{LOCATION_DISPLAY}} */
  location: 'Bahawalpur, Pakistan — available for remote work worldwide',
  /** One-line tagline used in the footer + OG. */
  tagline: 'Builder, researcher, educator — turning complexity into something usable.',
  /** Default meta description (overridable per page). */
  description:
    'Faizan — solo software engineer and CS PhD scholar in Bahawalpur, Pakistan. I build production data systems, research AI for genomics, and teach O/A Level Mathematics & Physics.',
  affiliation: 'The Islamia University of Bahawalpur',
  /** Topics for JSON-LD knowsAbout. */
  knowsAbout: [
    'Data engineering',
    'Web scraping',
    'LLM applications',
    'Functional genomics',
    'Bayesian optimization',
    'Mathematics',
    'Physics',
  ],
} as const;

/** Social links. `null` => the icon/link is omitted entirely (never linked to '#'). */
export const SOCIAL = {
  github: 'https://github.com/Faizan-IM', // {{GITHUB_URL}} — profile only; project repos are private
  linkedin: 'https://www.linkedin.com/in/faizan-iqbal-masood/', // {{LINKEDIN_URL}}
  x: null as string | null, // {{X_URL}} — unknown, omitted
  scholar: null as string | null, // {{SCHOLAR_URL}} — unknown, omitted
} as const;

/** Optional résumé/CV. `null` => the CV link is omitted. */
export const CV_URL: string | null = null; // {{CV_PDF}}

/** Optional profile photo (sits in src/assets). The design is complete without it. */
export const HAS_PROFILE_PHOTO = true; // profile.jpg present in repo

/**
 * Tutoring details. format is derivable from the existing site (online 1:1).
 * availability/rate/contact are not yet confirmed — graceful fallbacks shown,
 * tracked in TODO.md. `contact: null` => the tutoring CTA falls back to email.
 */
export const TUTORING = {
  format: 'Online · one-on-one', // {{TUTORING_FORMAT}}
  availability: 'Currently accepting students', // {{TUTORING_AVAILABILITY}} — confirm
  rate: 'Contact for rates', // {{TUTORING_RATE}} — confirm
  contact: null as string | null, // {{TUTORING_CONTACT}} — falls back to email
} as const;

/** Global navigation (order matters). */
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/research', label: 'Research' },
  { href: '/tutoring', label: 'Tutoring' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
