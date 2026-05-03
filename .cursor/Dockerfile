# Base image for Cursor Cloud Agents — toolchain is baked in before `install` runs.
# Keep Node in sync with `.nvmrc` and pnpm with `package.json` → `packageManager`.
FROM node:24.15.0-bookworm-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends git ca-certificates \
  && rm -rf /var/lib/apt/lists/*

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

RUN corepack enable && corepack prepare pnpm@10.33.2 --activate
