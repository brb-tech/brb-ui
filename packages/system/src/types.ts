import { CreateStyled } from "@emotion/styled";
import type { DefaultThemeParameters, SystemTheme } from "./theme";

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
   * @default import("./theme.ts")
   */
  theme?: (...args: DefaultThemeParameters) => object;

  /**
   * @description Use this field to identify topics in localstorage
   * @default brb-theme
   */
  themeModeKey?: string;

  /**
   * @description If using system color switching, `initialThemeMode` will not be used
   * @default system
   */
  initialThemeMode?: SystemTheme | "system";

  /**
   * @description If using system color switching, `initialThemeMode` will not be used
   * @default false
   */
  useSystemThemeMode?: boolean;

  /**
   * @default brb
   */
  prefixCls?: string;
};
