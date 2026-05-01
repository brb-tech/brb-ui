import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tools/testing/src/setup-test.ts"],
    include: ["packages/**/*.test.{ts,tsx}"],
    passWithNoTests: true
  }
});
