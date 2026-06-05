# TODO — owner-fillable placeholders

All site-specific values live in [`src/consts.ts`](src/consts.ts). Where a value
could be **verified from the existing public site / repo**, it was pre-filled (and
marked here). Where it's genuinely unknown, a graceful fallback is shown and the
item is flagged **OPEN** below. Edit `src/consts.ts` to change any of them.

## ✅ Pre-filled (verify they're correct)

| Token | Value used | Source |
|---|---|---|
| `{{FULL_NAME}}` | Muhammad Faizan Iqbal Masood | existing site `<title>` |
| `{{EMAIL}}` | mfaizanim@gmail.com | existing site contact section (already public) |
| `{{GITHUB_URL}}` | https://github.com/Faizan-IM | git remote / profile (repos stay private) |
| `{{LINKEDIN_URL}}` | https://www.linkedin.com/in/faizan-iqbal-masood/ | existing site |
| `{{SITE_DOMAIN}}` | https://faizan-im.github.io | this repo is the `faizan-im.github.io` user site |
| `{{LOCATION_DISPLAY}}` | Bahawalpur, Pakistan — available for remote work worldwide | brief |
| `{{PROFILE_PHOTO}}` | `src/assets/profile.jpg` | existing repo asset |
| `{{TUTORING_FORMAT}}` | Online · one-on-one | existing site ("online 1:1 sessions") |

## ⬜ OPEN — please confirm or fill

| Token | Where | Current fallback | Action |
|---|---|---|---|
| `{{TUTORING_AVAILABILITY}}` | `consts.ts → TUTORING.availability` | "Currently accepting students" | Set real availability, or keep |
| `{{TUTORING_RATE}}` | `consts.ts → TUTORING.rate` | "Contact for rates" | Add a rate, or keep |
| `{{TUTORING_CONTACT}}` | `consts.ts → TUTORING.contact` | `null` → falls back to email | Add WhatsApp/form link if preferred |
| `{{X_URL}}` | `consts.ts → SOCIAL.x` | `null` → icon omitted | Add X profile if wanted |
| `{{SCHOLAR_URL}}` | `consts.ts → SOCIAL.scholar` | `null` → omitted | Add Google Scholar/ORCID to boost research credibility |
| `{{CV_PDF}}` | `consts.ts → CV_URL` | `null` → no CV link | Drop a PDF in `public/` and set the path |

> Email shown publicly is `mfaizanim@gmail.com` (your existing site already
> exposes it). If you'd rather route portfolio contact to a different address,
> change `SITE.email` in `src/consts.ts`.

## Notes
- Project repos are intentionally **not linked** (they're private). Case studies
  show *"Private — available on request."* Only the GitHub **profile** is linked.
- Research copy uses the measured language from the brief only — no internal/dramatic phrasing.
