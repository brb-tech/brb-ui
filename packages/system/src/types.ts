import { CreateStyled } from "@emotion/styled";
import type { DefaultThemeParameters } from "./theme";
import { Theme } from ".";

/**
 * @description Styled Component Props form Emotion
 */
export type CreateStyledProps<Tag extends keyof JSX.IntrinsicElements> = ReturnType<
  CreateStyled[Tag]
>["defaultProps"] & {};

/**
 * @description BRB Theme Config
 */
export type ProviderProps = {
  /**
   * @default brb
   */
  prefixCls?: string;

  /**
   * @description If using system color switching, `initialThemeMode` will not be used
   * @default system
   */
  initialThemeMode?: Theme["themeMode"] | "system";

  /**
   * @default SUPPORTED_THEME_MODES
   */
  supportedThemes?: Theme["supportedThemes"];

  /**
   * @default import("./theme.ts")
   */
  theme?: (
    themeMode?: Theme["themeMode"],
    supportedThemes?: ProviderProps["supportedThemes"],
    prefixCls?: ProviderProps["prefixCls"]
  ) => Theme;

  /**
   * @description Use this field to identify topics in localstorage and cookie
   * @default brb-ui-theme-mode
   */
  themeModeKey?: string;

  /**
   * @description If using system color switching, `initialThemeMode` will not be used
   * @default false
   */
  useSystemThemeMode?: boolean;

  /**
   * @description When you use server-side rendering, you need the value in cookies for persistent rendering.
   */
  cookies?: string;
};
