import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8004
  },
  plugins: [
    react({
      jsxImportSource: "@brb-ui/system",
      babel: {
        plugins: ["@emotion/babel-plugin"]
      }
    })
  ]
});
