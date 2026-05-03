# Base image for Cursor Cloud Agents — toolchain is baked in before `install` runs.
# Keep Node in sync with `.nvmrc`. pnpm version comes from `package.json` → `packageManager` (Corepack).
FROM node:24.15.0-bookworm

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

RUN corepack enable
