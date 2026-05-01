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
    "@emotion/styled",
    "@brb-ui/system",
    "@brb-ui/button",
    "@brb-ui/icon",
    "@brb-ui/icons",
    "@brb-ui/hooks",
    "@brb-ui/animations",
    "@brb-ui/transition",
    "@brb-ui/utils"
  ]
});
