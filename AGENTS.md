# AGENTS.md

## Cursor Cloud specific instructions

### Overview

BRB UI is a React component library monorepo (pnpm + Turborepo). It contains publishable packages under `packages/*`, Storybook docs under `docs/storybook`, a Next.js website under `docs/website`, example apps under `examples/*`, and Jest test tooling under `tools/jest`.

### Prerequisites

- **Node.js 18** (see `.nvmrc`). Load via `export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh"`.
- **pnpm 8** as the package manager (`pnpm-lock.yaml` is the lockfile).

### Key commands

| Task | Command | Notes |
|---|---|---|
| Install deps | `pnpm install` | |
| Build packages | `pnpm build:packages` | Builds only `packages/*` via tsup |
| Lint | `pnpm lint` | ESLint on `packages/**/src` and `tools/**/src` |
| Format check | `pnpm format:check` | Prettier |
| Tests | `pnpm test` | Jest (currently only `packages/button/tests`) |
| Type check | `pnpm typecheck` | `tsc --noEmit` |
| Storybook dev | `pnpm dev:storybook` | Port 8000 |

### Known pre-existing issues

- `pnpm build` (full build including docs) fails because `docs/website` has a type error on CSS import in `layout.tsx`. Use `pnpm build:packages` instead for library builds.
- `pnpm typecheck` reports a pre-existing type error in `tools/jest/src/render.tsx` (TS2322 — `ReactElement` vs `ReactNode` wrapper type mismatch). This is not caused by agent changes.

### Gotchas

- Husky pre-commit hook calls `yarn lint-staged` (not pnpm). Husky may not be installed in the Cloud Agent environment; this is fine since lint/format are run explicitly.
- After `pnpm install`, packages must be built (`pnpm build:packages`) before Storybook or examples can run, because workspace packages reference `dist/` outputs.
