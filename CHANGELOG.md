# Changelog

All agents and contributors **must** add a concise entry here after making changes. See `AGENTS.md` for format and rules.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Reshaped page for 30-second Staff data-platform hiring screen: hero and signal lead with Jeter platform scope; case studies grid is lakehouse migration + AI coding spend lakehouse + reserved placeholder panel.
- Removed ticket/repo counts and Referee/Cerberus from featured work panels; supporting systems blurb moved to experience.

### Added

- `ReservedPanel` component for the forthcoming flagship case study slot.
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
