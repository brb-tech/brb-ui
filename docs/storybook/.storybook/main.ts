import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import { mergeConfig } from "vite";

const storybookDir = fileURLToPath(new URL(".", import.meta.url));
const systemRoot = path.resolve(storybookDir, "../../../packages/system/src");

const config: StorybookConfig = {
  stories: ["../../../packages/**/*.stories.mdx", "../../../packages/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  async viteFinal(userConfig) {
    return mergeConfig(userConfig, {
      resolve: {
        alias: {
          "@brb-ui/system/jsx-runtime": path.join(systemRoot, "jsx-runtime.ts"),
          "@brb-ui/system/jsx-dev-runtime": path.join(systemRoot, "jsx-dev-runtime.ts")
        }
      },
      plugins: [
        react({
          jsxImportSource: "@brb-ui/system"
        })
      ]
    });
  },

  core: {
    disableTelemetry: true
  },

  docs: {
    autodocs: true
  }
};

export default config;
