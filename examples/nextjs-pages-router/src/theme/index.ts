import { DefaultThemeParameters } from "@brb-ui/system/src/theme";

const theme = (...args: DefaultThemeParameters) => ({});

export type ITheme = ReturnType<typeof theme>;
export default theme;
