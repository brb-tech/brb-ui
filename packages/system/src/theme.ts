import zIndices from "./zIndices";
import light from "./light";
import dark from "./dark";

const SYSTEM_THEME = ["dark", "light"] as const;

type SystemTheme = (typeof SYSTEM_THEME)[number];

const colors: Record<SystemTheme, typeof dark> = {
  light,
  dark
};

const defaultTheme = <T extends SystemTheme>(theme = "dark" as T, systemTheme = SYSTEM_THEME, prefixCls = "brb") => ({
  systemTheme,
  theme,
  prefixCls,
  family: "Inter,sans-serif",
  system: {
    white: "#FFF",
    black: "#000",
    transparent: "transparent",
    inherit: "inherit",
    ...colors[theme]
  },
  zIndices
});

export type DefaultTheme = ReturnType<typeof defaultTheme>;

export type DefaultThemeParameters = Parameters<typeof defaultTheme>;

export default defaultTheme;
