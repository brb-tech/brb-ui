import { DefaultTheme } from "./theme";
declare module "./index.ts" {
  export interface Theme extends DefaultTheme {}
}
