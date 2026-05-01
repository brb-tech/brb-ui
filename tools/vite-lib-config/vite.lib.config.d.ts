import type { UserConfig } from "vite";

export interface LibViteOptions {
  root: string;
  entry: string;
  external: (string | RegExp)[];
  jsx?: boolean;
  jsxImportSource?: string;
}

export function createLibViteConfig(options: LibViteOptions): UserConfig;
