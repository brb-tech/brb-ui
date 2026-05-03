#!/usr/bin/env bash
set -eo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# Use Node from .nvmrc when nvm is available (paths differ across agent images).
# Avoid `set -u` while sourcing nvm — nvm.sh is not nounset-safe.
for nvm_sh in "${NVM_DIR:-$HOME/.nvm}/nvm.sh" "/home/ubuntu/.nvm/nvm.sh"; do
  if [[ -s "$nvm_sh" ]]; then
    # shellcheck source=/dev/null
    source "$nvm_sh"
    break
  fi
done

if command -v nvm >/dev/null 2>&1 && [[ -f .nvmrc ]]; then
  nvm install "$(tr -d '\r\n' <.nvmrc)"
  nvm use
fi

# packageManager in package.json pins pnpm; Corepack provides the binary on PATH.
corepack enable
corepack prepare pnpm@10.33.2 --activate

exec pnpm install
