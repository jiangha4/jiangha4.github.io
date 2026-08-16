# Changelog

All agents and contributors **must** add a concise entry here after making changes. See `AGENTS.md` for format and rules.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Raised body/muted contrast (`#f4f7f4` / `#c5d4c8`) and label green (`#5fb37a`); content panels sit on `rgba(5,8,5,0.72)` so rain does not eat glyphs.
- Enlarged the experience year rail (4.5rem year column, 2px line) so 2025–2016 reads at a glance; Nike II stays the heaviest node.
- Role-duties Staff copy: site meta, hero themes, signal paragraphs, and Nike III fields aligned to four clusters (lakehouse, GraphQL, AI-tooling analytics, observability).
- Deploy workflow and docs now treat `main` as the default branch; Pages is expected to publish from GitHub Actions, not a branch source.
- Experience layout C (designer lock): year rail **2025 / 2020 / 2019 / 2016** (no 2026 mark); filled nodes on Nike III + Nike II; hollow on Future State + BeyondSoft; Nike II heaviest node (team, Referee, Cerberus/China, Jeter foundation); Nike III lead beat + case-study links; education under rail; rail structure only (no A-style cards).
- Motion lock: single fixed full-viewport rain (drop 0.2, fade 0.025); scroll-in glyph decode for below-fold sections at 20% intersection.
- Hero first-paint role line: `Staff data platform engineer` (designer sign-off).
- Locked chrome accent to `#3dcc7a` across borders, rain glyphs, focus rings, and favicon.
- Design lock: static hero staff line (no BootSequence); rain background-only with locked dim phosphor `#3dcc7a`; removed scanlines and scrolling log column.
- Stack section is an 11-item fold list; removed ticker marquee and 33-chip wall.

### Added

- `docs/motion-walkthrough.mp4` — ~18s clip showing full-bleed rain + scroll-in section decode.
- `docs/walkthrough.mp4` — ~24s PR walkthrough (Staff hero first paint, signal, work panels, supporting systems).
- `CHANGELOG.md` with agent update rules; seeded with site rebuild history.
- `AGENTS.md` — repo map, design system, motion/a11y rules, and verification checklist.

## [1.0.0] — 2026-08-15

Ground-up replacement of the Bootstrap/jQuery static site.

### Added

- Vite + React 18 + TypeScript app with strict typing and CSS modules.
- `src/content.ts` — all site copy (signal, work, stack, experience, contact).
- Matrix-console UI: canvas `MatrixRain`, skippable `BootSequence`, scrolling log column, terminal panels.
- Sections: signal, selected work (4 panels), stack ticker, experience timeline, contact links.
- Sticky nav with mobile menu; skip link and semantic landmarks.
- `prefers-reduced-motion` and Save-Data branches (static glyphs, no typewriter/marquees).
- GitHub Actions workflow for Pages deploy (`npm ci`, lint, build → `dist/`).
- README with local dev and Pages setup notes.
- Headshot retained at `public/img/profile_picture.jpeg`.

### Removed

- Bootstrap, jQuery, Font Awesome, legacy `css/`, `js/`, and unused images.

[Unreleased]: https://github.com/jiangha4/jiangha4.github.io/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/jiangha4/jiangha4.github.io/releases/tag/v1.0.0
