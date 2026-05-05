# Programmes and workshops routes

Reference for public **programme** landing pages (`/programmes/*`) and **workshop** landing pages (`/workshop/*`): URLs, App Router entry files, and layout behaviour.

## Routing conventions

| Topic | Detail |
|--------|--------|
| **Route group `(public)`** | Sources live under `src/app/(public)/`. That folder name is **not** part of the URL. |
| **Programme URLs** | `https://<host>/programmes/<slug>` → `src/app/(public)/programmes/<slug>/page.tsx` |
| **Workshop URLs** | `https://<host>/workshop/<slug>` → `src/app/workshop/<slug>/page.tsx` |
| **`/programmes` and `/workshop` roots** | There is **no** root `page.tsx` for `/programmes` or `/workshop`; only per-slug pages exist. |
| **Typical entry files** | Each slug folder has `page.tsx`. Programme slugs and workshops also use a local `layout.tsx` beside `page.tsx`. Workshops additionally inherit the root [`src/app/workshop/layout.tsx`](../src/app/workshop/layout.tsx). |

For general `app/` layering conventions, see [FRONTEND_STRUCTURE.md](./FRONTEND_STRUCTURE.md).

---

## Programmes (`/programmes/<slug>`)

Root directory: [`src/app/(public)/programmes/`](../src/app/%28public%29/programmes/).

Each row is one route. Primary route files: `page.tsx`, `layout.tsx` inside the slug folder.

### PLID and related funnels

| URL | Slug | Route folder |
|-----|------|----------------|
| `/programmes/30-days-plid-healing-yoga` | `30-days-plid-healing-yoga` | [`src/app/(public)/programmes/30-days-plid-healing-yoga/`](../src/app/%28public%29/programmes/30-days-plid-healing-yoga/) |
| `/programmes/plid-home-recovery-funnel` | `plid-home-recovery-funnel` | [`src/app/(public)/programmes/plid-home-recovery-funnel/`](../src/app/%28public%29/programmes/plid-home-recovery-funnel/) |
| `/programmes/plid-surgery-decision-system` | `plid-surgery-decision-system` | [`src/app/(public)/programmes/plid-surgery-decision-system/`](../src/app/%28public%29/programmes/plid-surgery-decision-system/) |
| `/programmes/plid-treatment-by-epidural` | `plid-treatment-by-epidural` | [`src/app/(public)/programmes/plid-treatment-by-epidural/`](../src/app/%28public%29/programmes/plid-treatment-by-epidural/) |

### Yoga and condition programmes

| URL | Slug | Route folder |
|-----|------|----------------|
| `/programmes/pregnancy-care` | `pregnancy-care` | [`src/app/(public)/programmes/pregnancy-care/`](../src/app/%28public%29/programmes/pregnancy-care/) |
| `/programmes/regular-yoga-programme` | `regular-yoga-programme` | [`src/app/(public)/programmes/regular-yoga-programme/`](../src/app/%28public%29/programmes/regular-yoga-programme/) |
| `/programmes/yoga-for-all` | `yoga-for-all` | [`src/app/(public)/programmes/yoga-for-all/`](../src/app/%28public%29/programmes/yoga-for-all/) |
| `/programmes/yoga-for-back-pain` | `yoga-for-back-pain` | [`src/app/(public)/programmes/yoga-for-back-pain/`](../src/app/%28public%29/programmes/yoga-for-back-pain/) |
| `/programmes/yoga-for-bp` | `yoga-for-bp` | [`src/app/(public)/programmes/yoga-for-bp/`](../src/app/%28public%29/programmes/yoga-for-bp/) |
| `/programmes/yoga-for-diabetes` | `yoga-for-diabetes` | [`src/app/(public)/programmes/yoga-for-diabetes/`](../src/app/%28public%29/programmes/yoga-for-diabetes/) |
| `/programmes/yoga-for-frozen-shoulder` | `yoga-for-frozen-shoulder` | [`src/app/(public)/programmes/yoga-for-frozen-shoulder/`](../src/app/%28public%29/programmes/yoga-for-frozen-shoulder/) |
| `/programmes/yoga-for-height-growth` | `yoga-for-height-growth` | [`src/app/(public)/programmes/yoga-for-height-growth/`](../src/app/%28public%29/programmes/yoga-for-height-growth/) |
| `/programmes/yoga-for-migraine` | `yoga-for-migraine` | [`src/app/(public)/programmes/yoga-for-migraine/`](../src/app/%28public%29/programmes/yoga-for-migraine/) |
| `/programmes/yoga-for-menstrual-irregularities` | `yoga-for-menstrual-irregularities` | [`src/app/(public)/programmes/yoga-for-menstrual-irregularities/`](../src/app/%28public%29/programmes/yoga-for-menstrual-irregularities/) |
| `/programmes/yoga-for-plid` | `yoga-for-plid` | [`src/app/(public)/programmes/yoga-for-plid/`](../src/app/%28public%29/programmes/yoga-for-plid/) |
| `/programmes/yoga-for-thyroid` | `yoga-for-thyroid` | [`src/app/(public)/programmes/yoga-for-thyroid/`](../src/app/%28public%29/programmes/yoga-for-thyroid/) |
| `/programmes/yoga-for-weight-loss` | `yoga-for-weight-loss` | [`src/app/(public)/programmes/yoga-for-weight-loss/`](../src/app/%28public%29/programmes/yoga-for-weight-loss/) |

**Total programme routes:** 17.

**Implementation note:** Section-specific UI and CSS often live in each slug’s `_components/` folder or co-located `*.css` imports; only `page.tsx` / `layout.tsx` are listed here as stable route anchors.

---

## Workshops (`/workshop/<slug>`)

Root directory: [`src/app/workshop/`](../src/app/workshop/).

All workshop pages are nested under the shared root layout [`src/app/workshop/layout.tsx`](../src/app/workshop/layout.tsx) (fonts, `workshop-shell`, default metadata for path `/workshop`). Each slug also has its own `layout.tsx` next to `page.tsx`.

| URL | Slug | Route folder |
|-----|------|----------------|
| `/workshop/yoga-care-for-diabetes` | `yoga-care-for-diabetes` | [`src/app/workshop/yoga-care-for-diabetes/`](../src/app/workshop/yoga-care-for-diabetes/) |
| `/workshop/yoga-for-all` | `yoga-for-all` | [`src/app/workshop/yoga-for-all/`](../src/app/workshop/yoga-for-all/) |
| `/workshop/yoga-for-back-pain` | `yoga-for-back-pain` | [`src/app/workshop/yoga-for-back-pain/`](../src/app/workshop/yoga-for-back-pain/) |
| `/workshop/yoga-for-frozen-shoulder` | `yoga-for-frozen-shoulder` | [`src/app/workshop/yoga-for-frozen-shoulder/`](../src/app/workshop/yoga-for-frozen-shoulder/) |
| `/workshop/yoga-for-heart-care` | `yoga-for-heart-care` | [`src/app/workshop/yoga-for-heart-care/`](../src/app/workshop/yoga-for-heart-care/) |
| `/workshop/yoga-for-height-growth` | `yoga-for-height-growth` | [`src/app/workshop/yoga-for-height-growth/`](../src/app/workshop/yoga-for-height-growth/) |
| `/workshop/yoga-for-high-blood-pressure` | `yoga-for-high-blood-pressure` | [`src/app/workshop/yoga-for-high-blood-pressure/`](../src/app/workshop/yoga-for-high-blood-pressure/) |
| `/workshop/yoga-for-menstrual-irregularities` | `yoga-for-menstrual-irregularities` | [`src/app/workshop/yoga-for-menstrual-irregularities/`](../src/app/workshop/yoga-for-menstrual-irregularities/) |
| `/workshop/yoga-for-migraine` | `yoga-for-migraine` | [`src/app/workshop/yoga-for-migraine/`](../src/app/workshop/yoga-for-migraine/) |
| `/workshop/yoga-for-pcos` | `yoga-for-pcos` | [`src/app/workshop/yoga-for-pcos/`](../src/app/workshop/yoga-for-pcos/) |
| `/workshop/yoga-for-plid` | `yoga-for-plid` | [`src/app/workshop/yoga-for-plid/`](../src/app/workshop/yoga-for-plid/) |
| `/workshop/yoga-for-thyroid` | `yoga-for-thyroid` | [`src/app/workshop/yoga-for-thyroid/`](../src/app/workshop/yoga-for-thyroid/) |
| `/workshop/yoga-for-weight-loss` | `yoga-for-weight-loss` | [`src/app/workshop/yoga-for-weight-loss/`](../src/app/workshop/yoga-for-weight-loss/) |
| `/workshop/yoga-for-wellbeing` | `yoga-for-wellbeing` | [`src/app/workshop/yoga-for-wellbeing/`](../src/app/workshop/yoga-for-wellbeing/) |

**Total workshop routes:** 14.

---

## Shared programme modules (not routes)

Folder: [`src/app/(public)/programmes/_shared/`](../src/app/%28public%29/programmes/_shared/)

| File | Role |
|------|------|
| [`ProgrammeOfferCountdown.tsx`](../src/app/%28public%29/programmes/_shared/ProgrammeOfferCountdown.tsx) | Shared countdown UI for programme offers |
| [`ScrollReveal.tsx`](../src/app/%28public%29/programmes/_shared/ScrollReveal.tsx) | Shared scroll-reveal behaviour |

This directory does **not** define a URL segment; it is imported by programme pages or their components.

---

## Related

- [FRONTEND_STRUCTURE.md](./FRONTEND_STRUCTURE.md) — high-level `src/` layout and `app/` responsibilities.
