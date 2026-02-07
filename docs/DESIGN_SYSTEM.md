# Yoga With Doctor — Design System

## 1. Brand & theme overview

| | |
|--|--|
| **Brand name** | Yoga With Doctor |
| **Industry** | Medical · Wellness · Yoga · Mindfulness |
| **Personality** | Calm, Trustworthy, Premium, Healing |
| **Design philosophy** | **Clinical Zen** — balances medical authority (serif typography, structured data) with yoga serenity (soft sage palettes, rounded corners, generous whitespace). |

---

## 2. Color system

Colors are implemented as CSS custom properties and exposed via Tailwind. Use semantic tokens instead of raw HEX in components.

### Light mode (default)

| Token | HEX | Tailwind usage | Purpose |
|-------|-----|----------------|---------|
| `primary` | `#00A86B` | `bg-primary`, `text-primary`, `border-primary` | Main CTAs, active nav, success |
| `primary-variant` | `#007A4D` | `bg-primary-variant`, etc. | Pressed states, deep accents |
| `secondary` | `#E8F5E9` | `bg-secondary` | Tags, success banners, secondary buttons |
| `accent` | `#D4AF37` | `bg-accent`, `text-accent` | Premium badges, star ratings, elite content |
| `background` | `#F8F9FA` | `bg-background` | Page / app canvas |
| `surface` | `#FFFFFF` | `bg-surface` | Cards, modals, inputs |
| `foreground` | `#1A1A1A` | `text-foreground` | Headings, body text (maps to text-primary) |
| `muted` | `#666666` | `text-muted` | Metadata, excerpts, captions (maps to text-secondary) |
| `error` | `#EF5350` | `bg-error`, `text-error` | Destructive actions, errors |
| `border` | `#EEEEEE` | `border-border` | Separators, card outlines |

### Dark mode (Premium / night)

Enable with `class="dark"` on `<html>`. These tokens override in dark:

| Token | HEX | Purpose |
|-------|-----|---------|
| `background` | `#121212` | App canvas |
| `surface` | `#1E1E1E` | Cards, modals |
| `foreground` | `#FFFFFF` | Primary text |
| `muted` | `#B0B0B0` | Secondary text |
| `border` | `#333333` | Separators |

`primary`, `primary-variant`, `secondary`, `accent`, and `error` stay the same in dark for contrast.

### Usage rules

- **Accent (gold):** Use sparingly — premium badges, star ratings, elite highlights only.
- **Primary (sage green):** Use for high-contrast interactive elements (buttons, links, active states).

---

## 3. Typography system

Fonts are loaded via `next/font` and applied globally. CSS variables: `--font-serif` (Playfair Display), `--font-sans` (Inter).

### Font families

| Token | Font | Tailwind | Usage |
|-------|------|----------|--------|
| **Primary (Serif)** | Playfair Display | `font-display` or `font-serif` | Headlines, hero titles, doctor’s messages — authority and trust |
| **Secondary (Sans)** | Inter | `font-sans` | Body text, UI labels, buttons, form inputs — readability |

Theme: `sans: [Inter]`, `display` / `serif: [Playfair Display]`. Default body font is **Inter** (`font-sans`) set on `<body>` in `layout.tsx`.

### Type scale

| Token | Size | Weight | Line height | Tailwind | Usage |
|-------|------|--------|-------------|----------|--------|
| Display | 32px | 700 (Bold) | 120% | `text-display font-bold` | Hero titles (Playfair) |
| H1 | 24px | 600 (Semibold) | 130% | `text-h1 font-semibold` | Page titles, main headlines (Playfair) |
| H2 | 20px | 700 (Bold) | 130% | `text-h2 font-bold` | Section headers (Inter) |
| Body-LG | 16px | 400 (Regular) | 150% | `text-body-lg` | Main content, article body |
| Body-MD | 14px | 400 (Regular) | 150% | `text-body-md` | Default UI text, card descriptions |
| Caption | 12px | 500 (Medium) | 140% | `text-caption font-medium` | Metadata, labels, small tags |
| Button | 14px | 600 (Semibold) | 100% | `text-button font-semibold` | CTA text in buttons |

### Example

```tsx
<h1 className="font-serif text-h1 font-semibold text-foreground">Page Title</h1>
<h2 className="font-sans text-h2 font-bold text-foreground">Section</h2>
<p className="text-body-lg text-foreground">Article body.</p>
<span className="text-caption font-medium text-muted">Label</span>
<button className="font-sans text-button font-semibold">Submit</button>
```

---

## 4. Spacing & layout tokens

### Base unit: 8px grid

Use multiples of 8px for spacing. Tailwind’s default scale (4px base) gives 8px at `2`, 16px at `4`, 24px at `6`, 32px at `8`, etc. Prefer even numbers for layout: `p-4`, `gap-6`, `mb-8`.

### Border radius

| Token | Value | Tailwind | Usage |
|-------|--------|----------|--------|
| radius-sm | 8px | `rounded-radius-sm` | Small tags, secondary buttons |
| radius-md | 16px | `rounded-radius-md` | Cards, form inputs, primary buttons |
| radius-lg | 24px | `rounded-radius-lg` | Large hero containers, bottom sheets |
| radius-full | 9999px | `rounded-radius-full` | Avatars, pill tags |

### Shadows

| Token | Value | Tailwind | Usage |
|-------|--------|----------|--------|
| elevation-sm | 0 4px 12px rgba(0,0,0,0.05) | `shadow-elevation-sm` | Standard cards |
| elevation-md | 0 8px 24px rgba(0,0,0,0.12) | `shadow-elevation-md` | Active / floating elements |

---

## 5. Using tokens in code

```tsx
// Surfaces
<div className="bg-background" />
<article className="bg-surface border border-border rounded-radius-md shadow-elevation-sm" />

// Typography
<h1 className="font-serif text-h1 font-semibold text-foreground" />
<p className="text-body-lg text-foreground" />
<span className="text-caption font-medium text-muted" />

// CTAs & feedback
<button className="rounded-radius-md bg-primary text-white text-button font-semibold hover:bg-primary-variant" />
<span className="text-accent">Premium</span>
```

---

## 6. File reference

| What | Where |
|------|--------|
| Fonts (next/font) | `src/app/layout.tsx` — Playfair Display + Inter, variables on `<html>`, `font-sans` on `<body>` |
| Color & base CSS | `src/app/globals.css` — `:root` and `.dark` |
| Theme (colors, type, radius, shadow) | `tailwind.config.ts` — `theme.extend` |
