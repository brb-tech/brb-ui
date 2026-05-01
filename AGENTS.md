# AGENTS.md

## Cursor Cloud specific instructions

This is a pnpm monorepo (Turborepo) for **BRB UI** — a React component library built on Emotion CSS-in-JS.

### Quick Reference

| Action | Command |
|--------|---------|
| Install deps | `pnpm install` |
| Build packages | `pnpm build:packages` |
| Full build (incl. docs) | `pnpm build` |
| Lint | `pnpm lint` |
| Format check | `pnpm format:check` |
| Test | `pnpm test` |
| Typecheck | `pnpm typecheck` |
| Storybook dev | `pnpm dev:storybook` (port 8000) |
| Website dev | `pnpm dev:website` |

### Important Notes

- **Node.js 18** is required (see `.nvmrc`). Source nvm with: `export NVM_DIR="/home/ubuntu/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm use 18`
- **pnpm** is the package manager — npm/yarn will not work due to workspace protocol usage.
- `.npmrc` includes `shamefully-hoist=true` which is required for Storybook/webpack to resolve hoisted dependencies like `@emotion/react`.
- `package.json` includes `pnpm.onlyBuiltDependencies` to allow `@swc/core`, `esbuild`, `core-js`, and `core-js-pure` postinstall scripts to run.
- **Build before Storybook**: Packages must be built (`pnpm build:packages`) before running Storybook, since stories import from built output.
- Tests run via Jest + SWC and do NOT require a build step — they import from `src/` directly.
- The only test file currently is `packages/button/tests/button.test.tsx`.
- Husky git hooks enforce `lint-staged` on pre-commit and `commitlint` on commit messages (conventional commits).
