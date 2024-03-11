import { CreateStyledProps, Theme } from "@brb-ui/system";
import { IconProps } from "@brb-ui/icon";

export interface ButtonProps extends CreateStyledProps<"button"> {
  /**
   * @description Option to adjust button width to its parent width
   * @default false
   */
  block?: boolean;

  /**
   * @description border radius 50%
   * @default false
   */
  circle?: boolean;

  /**
   * @description theme color scheme
   * @default primary
   */
  scheme?: keyof Omit<Theme["system"]["colors"], "white" | "black" | "whiteAlpha" | "blackAlpha">;

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
   * @description Icon placement
   * @default right
   */
  iconPlacement?: "left" | "right";

  /**
   * @description icon svg
   * @default
   */
  icon?: IconProps["svg"];

  /**
   * @description icon svg
   * @default LoadingOutlinedIcon
   */
  loadingIcon?: IconProps["svg"];

  /**
   * @description Icon size
   * @default undefined
   */
  iconSize?: IconProps["size"];

  /**
   * @description Icon animation
   * @default rotation
   */
  iconAnimation?: IconProps["animation"];

  /**
   * @description Icon color
   * @default undefined
   */
  iconColor?: IconProps["color"];
}
