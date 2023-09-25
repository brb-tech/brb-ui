import React from "react";
import { Preview } from "@storybook/react";
import { Provider } from "@brb-ui/system";
import { themes } from "@storybook/theming";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

const preview: Preview = {
  parameters: {
    // layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: { disable: true },
    docs: {
      theme: themes.dark
    }
  },
  decorators: [
    (StoryFn, context) => {
      return (
        <Provider>
          <StoryFn />
        </Provider>
      );
    }
  ]
};

export default preview;
