import whiteAlpha from "./whiteAlpha";
import blackAlpha from "./blackAlpha";
import light from "./light";
import dark from "./dark";
import zIndices from "./zIndices";

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
  system: {
    fontFamily: "Inter,sans-serif",
    inherit: "inherit",
    transparent: "transparent",
    currentColor: "currentColor",
    colors: {
      white: "#FFF",
      black: "#000",
      whiteAlpha,
      blackAlpha,
      ...colors[themeMode]
    },
    zIndices
  }
});

export type DefaultTheme = ReturnType<typeof defaultTheme>;

export type DefaultThemeParameters = Parameters<typeof defaultTheme>;

export default defaultTheme;
