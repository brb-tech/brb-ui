import { StorybookConfig } from "@storybook/react-webpack5";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";

const require = createRequire(import.meta.url);
const storybookConfigDir = fileURLToPath(new URL(".", import.meta.url));
const packagesDir = path.join(storybookConfigDir, "..", "..", "..", "packages");

const config: StorybookConfig = {
  stories: ["../../../packages/**/*.stories.mdx", "../../../packages/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
    // {
    //   name: "@storybook/addon-storysource",
    //   options: {
    //     loaderOptions: {
    //       prettierConfig: {
    //         trailingComma: "none",
    //         tabWidth: 2,
    //         printWidth: 120,
    //         semi: true,
    //         singleQuote: false,
    //         arrowParens: "always",
    //         jsxSingleQuote: false
    //       }
    //     },
    //     sourceLoaderOptions: {
    //       injectStoryParameters: false
    //     }
    //   }
    // }
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async (config, { configType: _configType }) => {
    const babelLoader = {
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          [require.resolve("@babel/preset-env"), { bugfixes: true, targets: { chrome: "100" } }],
          [require.resolve("@babel/preset-react"), { runtime: "automatic" }],
          require.resolve("@babel/preset-typescript"),
          require.resolve("@emotion/babel-preset-css-prop")
        ],
        cacheDirectory: true
      }
    };

    config.module = config.module ?? {};
    config.module.rules = [...(config.module.rules ?? [])];
    config.module.rules.push({
      test: /\.(tsx?|jsx?)$/,
      include: [packagesDir, storybookConfigDir],
      exclude: /node_modules/,
      use: [babelLoader]
    });

    return config;
  },
  // staticDirs: ["../public"],
  core: {
    disableTelemetry: true
  },
  features: {
    buildStoriesJson: true
  },
  docs: {
    autodocs: true
  }
};
export default config;
