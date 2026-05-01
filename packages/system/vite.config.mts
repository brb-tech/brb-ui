import { createLibViteConfig } from "@brb-ui/vite-lib-config";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default createLibViteConfig({
  root,
  entry: "src/index.ts",
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "@emotion/react",
    "@emotion/react/jsx-runtime",
    "@emotion/react/jsx-dev-runtime",
    "@emotion/styled",
    "@brb-ui/hooks",
    "@brb-ui/utils",
    "cookie",
    "js-cookie",
    "lodash.merge"
  ],
  jsxImportSource: "@emotion/react"
});
