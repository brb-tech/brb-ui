import { createLibViteConfig } from "@brb-ui/vite-lib-config";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default createLibViteConfig({
  root,
  entry: "src/index.ts",
  external: [],
  jsx: false
});
