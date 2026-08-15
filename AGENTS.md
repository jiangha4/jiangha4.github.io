# AGENTS.md — jiangha4.github.io

Guide for AI agents and contributors working on David Jiang’s hiring-facing personal site.

**Live:** https://jiangha4.github.io/  
**Default branch:** `master`  
**Deploy:** GitHub Actions → Pages (not “Deploy from a branch”). See `.github/workflows/deploy.yml`.

---

## Quick start

```bash
npm ci          # or npm i
npm run dev     # http://localhost:5173
npm run lint
npm run build   # output: dist/
```

Before finishing a change: `npm run lint && npm run build` must pass. CI runs the same on push to `master`.

---

## Repository map

| Path | Role |
|------|------|
| `src/content.ts` | **All user-facing copy** — nav labels, hero boot lines, signal paragraph, work panels, stack list, experience, contact, meta strings |
| `src/App.tsx` | Page shell: skip link, nav, section order, footer |
| `src/main.tsx` | React entry; imports `styles/globals.css` |
| `src/styles/globals.css` | Design tokens (`:root`), base typography, skip link, scanlines/grid overlays |
| `src/components/` | UI sections and effects (one component + CSS module per concern) |
| `src/hooks/useMediaPreferences.ts` | `prefers-reduced-motion`, `Save-Data`, small-screen breakpoints |
| `public/img/` | Static assets (headshot: `profile_picture.jpeg`) |
| `index.html` | SEO meta, Google Fonts links, root mount |
| `vite.config.ts` | `base: '/'` (required for user.github.io root) |
| `.github/workflows/deploy.yml` | Pages build + deploy pipeline |

### Component → section mapping

| Component | Section id | Notes |
|-----------|------------|--------|
| `Navigation` | — | Sticky nav; mobile menu toggle |
| `Hero` | — | Full-viewport rain, boot sequence, scrolling logs, CTAs |
| `Signal` | `#signal` | Hiring-manager paragraph |
| `Work` | `#work` | Four `TerminalPanel` cards; faint background rain |
| `Stack` | `#stack` | Marquee ticker + static chip list (SEO / reduced-motion) |
| `Experience` | `#experience` | Timeline + education |
| `Contact` | `#contact` | mailto + external links only |
| `Footer` | — | Copyright + repo source link |

Shared primitives:

- `MatrixRain` — canvas digital rain (hero + work backdrop)
- `BootSequence` — typewriter hero lines (skippable)
- `ScrollingLogs` — vertical log column in hero
- `TerminalPanel` — work card layout (problem / built / outcome)

---

## Design decisions (do not regress)

### Visual system — Matrix operator console, not movie poster

- **Background:** `#050805` with optional faint grid (`globals.css` `body::after`)
- **Chrome / accents:** phosphor green `#00ff6a`; secondary `#0b3d1f` / `#1a6b3a`
- **Body copy:** off-white `#e8efe9` on dark — **never** long paragraphs in neon green
- **Fonts:** IBM Plex Mono (chrome, labels, boot) + IBM Plex Sans (body) via Google Fonts in `index.html`
- **Panels:** hairline green borders, slight radius (`--radius-panel: 3px`), no glassmorphism, no Bootstrap cards, no emoji-as-design
- **Scanlines:** subtle only (`--scanline-opacity` ≤ 0.06 in `globals.css`)

Use CSS custom properties in `globals.css`; section-specific layout in `*.module.css`. **No** Bootstrap, jQuery, Tailwind CDN, or UI kits.

### Motion and performance

| Feature | Normal | `prefers-reduced-motion: reduce` |
|---------|--------|----------------------------------|
| Matrix rain | rAF canvas animation | Static glyph field |
| Boot sequence | Typewriter | All lines shown immediately |
| Stack ticker / scrolling logs | CSS animation | Hidden or static fallback |

Additional rules:

- Rain pauses when `document.visibilityState === 'hidden'`
- Throttle rain on small screens (`max-width: 640px`) and when `navigator.connection.saveData` is true
- Hero uses `intensity="full"`; work section uses `intensity="faint"`

When adding motion, always branch on `usePrefersReducedMotion()` or CSS `@media (prefers-reduced-motion: reduce)`.

### Content rules

1. **Copy lives in `src/content.ts`** — not buried in JSX. Components import and render; they do not invent facts.
2. **Do not invent metrics, employers, or confidential Nike internals** beyond what is already in `content.ts`.
3. **Exactly one `<h1>`:** “David Jiang” (visually hidden in `Hero.tsx` for SEO; visible name is in boot sequence styling).
4. **Section headings** use lowercase terminal style (`signal`, `selected work`, etc.) via `<h2>`.

### Accessibility

- Skip link to `#signal` in `App.tsx`
- Semantic landmarks: `<header>`, `<main>`, `<footer>`, `<section>` with `aria-labelledby`
- Keyboard-visible focus: `:focus-visible` in `globals.css` (phosphor outline)
- Decorative rain/logs: `aria-hidden="true"` on canvas and atmosphere elements
- Focus order should match visual order

### SEO

- Document title and meta description: `siteMeta` in `content.ts` + `index.html` (keep in sync when changing)
- Open Graph tags in `index.html`
- Stack section exposes a static chip list for crawlers even when ticker runs

---

## Common tasks

### Change text (bio, work bullet, experience, contact)

Edit `src/content.ts` only. Run `npm run build` to verify types still align with component props.

### Add a nav item + section

1. Add entry to `navItems` in `content.ts` (id must match `id` on `<section>`)
2. Create component under `src/components/`
3. Import and place in `App.tsx` between existing sections
4. Add anchor id for smooth-scroll from nav

### Adjust colors or global typography

Prefer `src/styles/globals.css` `:root` tokens. Avoid hardcoding hex in components unless for canvas-specific alpha values.

### Change deployment or CI

Edit `.github/workflows/deploy.yml`. Required permissions: `pages: write`, `id-token: write`. Artifact path must remain `dist`.

---

## GitHub Pages constraints

- This is a **user site** (`username.github.io`). Vite `base` must stay `'/'`.
- **Never merge source-only changes to `master` without a working Actions deploy** — the old “static files on master” model is replaced by Actions publishing `dist/`.
- After first merge, repo owner must set **Settings → Pages → Source: GitHub Actions**.

---

## Out of scope (unless explicitly requested)

Blog, CMS, backend, auth, 3D WebGL, analytics pixels, contact forms, phone numbers, skill bars, fake live dashboards, new employers or inflated metrics.

---

## Verification checklist

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] Copy changes only in `content.ts` (or new typed content modules under `src/content/`)
- [ ] Reduced-motion path still disables rain, typewriter, and marquees
- [ ] Mobile: single column, no CTA overflow, nav menu works
- [ ] No Bootstrap / jQuery / Font Awesome reintroduced
- [ ] Body paragraphs remain off-white, not neon green
