import "@testing-library/jest-dom/vitest";
import * as vitestAxeMatchers from "vitest-axe/matchers";

expect.extend(vitestAxeMatchers);

import React from "react";
globalThis.React = React;

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.Element.prototype.scrollTo = () => {};
window.scrollTo = () => {};

if (typeof window.matchMedia !== "function") {
  Object.defineProperty(window, "matchMedia", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }))
  });
}

// Workaround https://github.com/jsdom/jsdom/issues/2524#issuecomment-897707183
import { TextEncoder } from "node:util";
globalThis.TextEncoder = TextEncoder as typeof globalThis.TextEncoder;

globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
})) as unknown as typeof ResizeObserver;
