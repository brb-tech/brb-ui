import { CreateStyled } from "@emotion/styled";
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
   * @description class name prefix.
   * @default brb
   */
  prefixCls?: string;

  /**
   * @description Initializing theme mode in uncontrolled mode.
   * @default system
   */
  initialThemeMode?: Theme["themeMode"];

  /**
   * @description If `themeMode` is used, theme switching becomes controlled mode.
   */
  themeMode?: Theme["themeMode"];

  /**
   * @default SUPPORTED_THEME_MODES
   */
  supportedThemes?: Theme["supportedThemes"];

  /**
   * @default import("./theme.ts")
   */
  theme?: (
    themeMode?: ProviderProps["themeMode"],
    supportedThemes?: ProviderProps["supportedThemes"],
    prefixCls?: ProviderProps["prefixCls"]
  ) => Theme;

  /**
   * @description Use this field to identify topics in localstorage and cookie
   * @default brb-ui-theme-mode
   */
  themeModeKey?: string;

  /**
   * @description When you use server-side rendering, you need the value in cookies for persistent rendering.
   */
  cookies?: string;
};

export interface SystemType extends Required<Pick<ProviderProps, "themeMode" | "supportedThemes">> {
  setThemeMode: (_themeMode: Theme["themeMode"]) => void;
}
