import { CreateStyledProps } from "@brb-ui/system";
import { IconProps } from "@brb-ui/icon";

export interface ButtonProps extends CreateStyledProps<"button"> {
  /**
   * @description Option to adjust button width to its parent width
   * @default false
   */
  block?: boolean;

  /**
   * @description theme color scheme
   * @default primary
   */
  scheme?: "default" | "primary" | "danger" | "info" | "warn";

  /**
   * @description The button component style type
   * @default contained
   */
  variant?: "contained" | "outlined" | "text";

  /**
   * @description Start loading spin animation
   * @default false
   */
  loading?: boolean;

  /**
   * @description Button size
   * @default middle
   */
  size?: "large" | "middle" | "small";

  /**
   * @description Icon size
   * @default undefined
   */
  iconProps?: Pick<IconProps, "size" | "svg" | "animation" | "color">;
}
