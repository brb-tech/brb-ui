import { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverageFrom: ["packages/**/*.{ts,tsx}", "!packages/**/*.stories.{ts,tsx}"],
  collectCoverage: true,
  transformIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)?$": "@swc/jest"
  },
  setupFilesAfterEnv: ["@brb-ui/jest/setup-test"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  }
};

export default config;
