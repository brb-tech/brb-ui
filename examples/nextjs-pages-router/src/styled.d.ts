declare global {
  import { ITheme } from "theme";
  import { DefaultTheme } from "@brb-ui/core";
  declare module "@brb-ui/core" {
    type T = DefaultTheme & ITheme;
    export interface Theme extends T {}
  }
}
