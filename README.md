# David Jiang — Personal Site

Matrix-console personal site for [jiangha4.github.io](https://jiangha4.github.io/). Built with Vite, React 18, and TypeScript.

## Local development

```bash
npm i
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The dev server binds to port 5173 by default.

### Other scripts

```bash
npm run build   # production build to dist/
npm run lint    # ESLint
npm run preview # preview production build locally
```

## GitHub Pages deployment

This repo uses **GitHub Actions** to build and deploy the Vite app on every push to `master` (or `main`).

1. Merge changes to `master`.
2. In the repository **Settings → Pages**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. The workflow in `.github/workflows/deploy.yml` runs `npm ci`, `npm run lint`, and `npm run build`, then publishes the `dist/` artifact via the official Pages deploy actions.

Manual deploy: trigger **Deploy to GitHub Pages** from the Actions tab (`workflow_dispatch`).

## Project structure

- `AGENTS.md` — navigation guide and design decisions for AI agents / contributors
- `CHANGELOG.md` — change log (agents must append concise `[Unreleased]` entries after edits)
- `src/content.ts` — all site copy (typed)
- `src/components/` — React components (Matrix rain, boot sequence, sections)
- `public/img/` — static assets (headshot)

## License

© David Jiang
