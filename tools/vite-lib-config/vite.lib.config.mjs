import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

/**
 * @param {{
 *   root: string;
 *   entry: string;
 *   external: (string | RegExp)[];
 *   jsx?: boolean;
 *   jsxImportSource?: string;
 * }} options
 */
export function createLibViteConfig({ root, entry, external, jsx = true, jsxImportSource = "@brb-ui/system" }) {
  const plugins = [];
  if (jsx) {
    plugins.push(
      react({
        jsxImportSource,
        babel: {
          plugins: ["@emotion/babel-plugin"]
        }
      })
    );
  }
  plugins.push(
    dts({
      entryRoot: "src",
      rollupTypes: false,
      tsconfigPath: `${root}/tsconfig.json`
    })
  );

  return defineConfig({
    root,
    plugins,
    build: {
      lib: {
        entry,
        formats: ["es", "cjs"],
        fileName: (format) => (format === "es" ? "index.mjs" : "index.js")
      },
      rollupOptions: {
        external,
        output: {
          exports: "named"
        }
      },
      sourcemap: true,
      emptyOutDir: true,
      outDir: "dist"
    }
  });
}
