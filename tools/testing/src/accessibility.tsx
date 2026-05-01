import "@testing-library/jest-dom/vitest";
import { RenderOptions } from "@testing-library/react";
import type { RunOptions } from "axe-core";
import { axe } from "vitest-axe";
import * as React from "react";
import { render } from "./render";

export const accessibility = async (
  ui: React.ReactElement | HTMLElement,
  options: RenderOptions & { axeOptions?: RunOptions } = {}
) => {
  const { axeOptions, ...rest } = options;
  const container = React.isValidElement(ui) ? render(ui, { ...rest, withSystemProvider: true }).container : ui;
  const results = await axe(container as HTMLElement, axeOptions);
  // @ts-expect-error extended by vitest-axe in setup-test
  expect(results).toHaveNoViolations();
};
