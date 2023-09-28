import "@testing-library/jest-dom";
import { render as Render, RenderOptions as TlRenderOptions } from "@testing-library/react";
import * as React from "react";
import userEvent from "@testing-library/user-event";
import { Provider } from "@brb-ui/system";
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

const ProviderWrapper: React.JSXElementConstructor<{ children: React.ReactElement }> = (props) => (
  <Provider {...props} />
);

export interface RenderOptions extends TlRenderOptions {
  withSystemProvider?: boolean;
}

export function render(
  ui: React.ReactElement,
  { withSystemProvider, ...options }: RenderOptions = {
    withSystemProvider: true
  }
): ReturnType<typeof Render> & { user: ReturnType<typeof userEvent.setup> } {
  const user = userEvent.setup();

  if (withSystemProvider) {
    options.wrapper = ProviderWrapper;
  }

  const result = Render(ui, options);

  return { user, ...result };
}
