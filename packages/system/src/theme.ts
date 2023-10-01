import zIndices from "./zIndices";
import light from "./light";
import dark from "./dark";

export const SUPPORTED_THEME_MODES = ["dark", "light"] as const;

export type SupportedThemeMode = (typeof SUPPORTED_THEME_MODES)[number];

const colors: Record<SupportedThemeMode, typeof dark> = {
  light,
  dark
};

const defaultTheme = <T extends SupportedThemeMode>(
  themeMode = "dark" as T,
  supportedThemes = SUPPORTED_THEME_MODES,
  prefixCls = "brb"
) => ({
  themeMode,
  supportedThemes,
  prefixCls,
  family: "Inter,sans-serif",
  system: {
    white: "#FFF",
    black: "#000",
    transparent: "transparent",
    inherit: "inherit",
    ...(colors[themeMode] ? colors[themeMode] : colors["dark"])
  },
  zIndices
});

export type DefaultTheme = ReturnType<typeof defaultTheme>;

export type DefaultThemeParameters = Parameters<typeof defaultTheme>;

export default defaultTheme;
