import "@testing-library/jest-dom";
import { RenderOptions } from "@testing-library/react";
import { axe, toHaveNoViolations, JestAxeConfigureOptions } from "jest-axe";
import * as React from "react";
import { render } from "./render";

expect.extend(toHaveNoViolations);

export const accessibility = async (
  ui: React.ReactElement | HTMLElement,
  options: RenderOptions & { axeOptions?: JestAxeConfigureOptions } = {}
) => {
  const { axeOptions, ...rest } = options;
  const container = React.isValidElement(ui) ? render(ui, { ...rest, withSystemProvider: true }).container : ui;
  const results = await axe(container as HTMLElement, axeOptions);
  expect(results).toHaveNoViolations();
};
