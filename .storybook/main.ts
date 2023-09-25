import { StorybookConfig } from "@storybook/react-webpack5";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.mdx", "../packages/**/*.stories.@(js|jsx|ts|tsx)"],

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
  webpackFinal: async (config, { configType }) => {
    return config;
  },
  // staticDirs: ["../public"],
  core: {
    disableTelemetry: true
  },
  async babel(config, { configType }) {
    const presets = [
      require.resolve("@babel/preset-env"),
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-typescript"),
      require.resolve("@emotion/babel-preset-css-prop")
    ];

    return {
      ...config,
      presets
    };
  },
  features: {
    buildStoriesJson: true
  },
  docs: {
    autodocs: true
  }
};
export default config;
