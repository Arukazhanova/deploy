<!-- .github/copilot-instructions.md: project-specific guidance for AI coding agents -->

# Project guidance for AI coding agents

This repository is a small React + TypeScript app scaffolded for Vite. Use these instructions to be immediately productive when making changes, fixes, or feature work.

- **Project type:** React (v19) + TypeScript + Vite.
- **Entry points:** `src/main.tsx` and `src/App.tsx` (UI root).
- **Build system:** Vite. See `vite.config.ts`.
- **Key config:** `tsconfig.app.json`, `tsconfig.node.json` (referenced from `tsconfig.json`).

Commands (from `package.json`):

- Install dependencies: `npm install`
- Start dev server (HMR): `npm run dev` (runs `vite`)
- Build (type-check & bundle): `npm run build` (runs `tsc -b && vite build`)
- Preview production build: `npm run preview` (runs `vite preview`)
- Lint: `npm run lint` (`eslint .`)

Files & patterns to reference when editing code

- UI components: `src/` — `App.tsx` contains the demo usage of `react-date-picker`.
- Styles: `src/index.css`, `src/App.css`. Prefer keeping small components' styles in these files as the project currently uses global CSS.
- Third-party integration: `react-date-picker` is used in `App.tsx`. Follow its API when adding date-related features.
- Vite plugin usage: `vite.config.ts` uses `@vitejs/plugin-react` — respect Vite's fast-refresh and import conventions (use `.tsx` extension for components where present).

Project-specific conventions

- TypeScript strictness: The repo uses separate tsconfig references (`tsconfig.app.json`, `tsconfig.node.json`) — rely on the build step `tsc -b` to catch type-level issues.
- Files use `.tsx` extensions for React components (e.g., `App.tsx`) and import them with explicit extensions in `main.tsx` (the code imports `./App.tsx`). Keep imports consistent with existing files.
- Avoid changing `index.html` unless necessary for new global assets or meta tags — Vite expects the app root element with id `root`.
- Minimal inline styles are used in `App.tsx` for demo UI. For larger changes, extract to `App.css`.

Debugging and testing notes

- No test runner is configured in this repo. When adding tests, prefer a lightweight setup (Vitest or Jest) and update `package.json` scripts accordingly.
- For runtime debugging: run `npm run dev` and use the browser devtools. Vite offers fast refresh; changes to `src` are reflected immediately.

When making changes, prefer:

- Small, focused commits that update a single logical concern (component, style, or config).
- Running `npm run build` locally before PR to ensure both type-checking and bundling succeed.

Examples (explicit guidance for common tasks)

- Add a new component `src/components/MyPicker.tsx`:

  - Use `.tsx` extension and export a default React function component.
  - Import styles from `../App.css` or create `src/components/MyPicker.css` and import it at top of the component.
  - If the component uses Date objects, follow the `useState<Date | null>` pattern used in `App.tsx`.

- Update date serialization/formatting:
  - Prefer using built-in `toLocaleDateString()` or `toLocaleString()` as in `App.tsx` for demo code. If adding a new date formatting dependency, add it to `package.json` and update `npm install` instructions in the PR.

Files to check before submitting PR

- `package.json` — ensure scripts and dependencies are updated.
- `tsconfig.*` — ensure type changes are accounted for by `tsc -b`.
- `vite.config.ts` — if changing build behavior, preserve `@vitejs/plugin-react` usage.

If you need more context or want me to expand sections (tests, CI, or contributor guidelines), say which area to expand and I'll update this file.
