import { CreateStyled } from "@emotion/styled";
import type { DefaultThemeParameters } from "./theme";

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
   * @default "brb"
   */
  prefixCls?: string;
};
