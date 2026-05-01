import "@testing-library/jest-dom/vitest";
import { render as Render, RenderOptions as TlRenderOptions } from "@testing-library/react";
import * as React from "react";
import userEvent from "@testing-library/user-event";
import { Provider } from "@brb-ui/system";
const ProviderWrapper = (props: { children: React.ReactNode }) => <Provider {...props} />;

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
