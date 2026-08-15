# AGENTS.md — jiangha4.github.io

Guide for AI agents and contributors working on David Jiang’s hiring-facing personal site.

**Live:** https://jiangha4.github.io/  
**Default branch:** `main`  
**Deploy:** GitHub Actions → Pages (not “Deploy from a branch”). See `.github/workflows/deploy.yml`.

---

## Quick start

```bash
npm ci          # or npm i
npm run dev     # http://localhost:5173
npm run lint
npm run build   # output: dist/
```

Before finishing a change: `npm run lint && npm run build` must pass. CI runs the same on push to `main`.

**After every change:** add a concise entry to `CHANGELOG.md` under `[Unreleased]` (see [Changelog](#changelog) below).

---

## Changelog

**Required.** Every agent session that modifies the repo must update `CHANGELOG.md` before finishing.

1. Open `CHANGELOG.md` and edit the **`[Unreleased]`** section (create it if missing).
2. Add one or more bullets under the right category: `Added`, `Changed`, `Fixed`, `Removed`, `Security`.
3. Keep each bullet **one line**, outcome-focused — what changed and why it matters, not file lists.
4. Do not duplicate the full PR description; one bullet per logical change is enough.
5. When a release is tagged, move `[Unreleased]` items into a dated version section.

**Example:**

```markdown
## [Unreleased]

### Changed
- Tightened Signal paragraph wording; copy still sourced from `content.ts`.
```

---

## Repository map

| Path | Role |
|------|------|
| `CHANGELOG.md` | **Required change log** — concise `[Unreleased]` entries after every agent edit |
| `AGENTS.md` | Agent navigation and design decisions (this file) |
| `src/content.ts` | **All user-facing copy** — nav labels, hero boot lines, signal paragraph, work panels, stack list, experience, contact, meta strings |
| `src/App.tsx` | Page shell: skip link, nav, section order, footer |
| `src/main.tsx` | React entry; imports `styles/globals.css` |
| `src/styles/globals.css` | Design tokens (`:root`), base typography, skip link, faint grid overlay |
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
| `Hero` | — | Static staff line on first paint; background rain only |
| `Work` | `#work` | Two case-study `TerminalPanel`s + one `ReservedPanel` placeholder |
| `Signal` | `#signal` | Jeter platform lead story (staff-scope, outcomes-first) |
| `Stack` | `#stack` | 11-item fold list (`<details>`); no ticker or chip wall |
| `Experience` | `#experience` | Year rail 2025/2020/2019/2016 (layout C); filled/hollow/heavy nodes; education below rail |
| `Contact` | `#contact` | mailto + external links only |
| `Footer` | — | Copyright + repo source link |

Shared primitives:

- `MatrixRain` — fixed full-viewport canvas; sparse glyph field (20% cells, α 0.10) + rain heads (drop 0.2, fade 0.025)
- `TerminalPanel` — work card layout (problem / built / outcome)
- `ReservedPanel` — placeholder for forthcoming flagship case study

---

## Design decisions (do not regress)

### Visual system — Matrix operator console, not movie poster

- **Background:** `#050805` with optional faint grid (`globals.css` `body::after`)
- **Chrome / accents:** dim phosphor green `#3dcc7a` (locked); secondary `#0f3322` / `#1e5c3f` — not neon `#00ff6a`
- **Body copy:** off-white `#e8efe9` on dark — **never** long paragraphs in green chrome
- **Fonts:** IBM Plex Mono (chrome, labels) + IBM Plex Sans (body) via Google Fonts in `index.html`
- **Panels:** hairline green borders, slight radius (`--radius-panel: 3px`), no glassmorphism, no Bootstrap cards, no emoji-as-design
- **No scanlines overlay**

Use CSS custom properties in `globals.css`; section-specific layout in `*.module.css`. **No** Bootstrap, jQuery, Tailwind CDN, or UI kits.

### Motion and performance

| Feature | Normal | `prefers-reduced-motion: reduce` |
|---------|--------|----------------------------------|
| Matrix rain | Single fixed full-viewport canvas, rAF | Static glyph field (no falling) |
| Below-fold sections | Glyph decode on 20% intersection (28ms/glyph, 700ms max/line, 80ms line stagger) | Real copy immediately |
| Stack fold list | `<details>` expand/collapse | Same (no marquee) |

Additional rules:

- Rain is **one** full-bleed fixed canvas behind all content — no per-section rain instances
- Hero staff line is **real text on first paint** — never decode the hero
- Rain pauses when `document.visibilityState === 'hidden'`
- Throttle rain on small screens (`max-width: 640px`) and when `navigator.connection.saveData` is true
- Hero uses `intensity="full"`; work section uses `intensity="faint"`

When adding motion, always branch on `usePrefersReducedMotion()` or CSS `@media (prefers-reduced-motion: reduce)`.

### Content rules

1. **Copy lives in `src/content.ts`** — not buried in JSX. Components import and render; they do not invent facts.
2. **Do not invent metrics, employers, or confidential Nike internals** beyond what is already in `content.ts`.
3. **Exactly one `<h1>`:** “David Jiang” — visible in hero staff line block.
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
- Stack section exposes an 11-item fold list for hiring-relevant technologies

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
- **Never merge source-only changes to `main` without a working Actions deploy** — the old “static files on master” model is replaced by Actions publishing `dist/`.
- After first merge, repo owner must set **Settings → Pages → Source: GitHub Actions**.

---

## Out of scope (unless explicitly requested)

Blog, CMS, backend, auth, 3D WebGL, analytics pixels, contact forms, phone numbers, skill bars, fake live dashboards, new employers or inflated metrics.

---

## Verification checklist

- [ ] `CHANGELOG.md` updated under `[Unreleased]` with concise bullet(s)
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] Copy changes only in `content.ts` (or new typed content modules under `src/content/`)
- [ ] Reduced-motion path pauses rain (static glyphs); no typewriter or marquees
- [ ] Mobile: single column, no CTA overflow, nav menu works
- [ ] No Bootstrap / jQuery / Font Awesome reintroduced
- [ ] Body paragraphs remain off-white, not neon green
