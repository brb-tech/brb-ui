import { CreateStyledProps } from "@brb-ui/system";
import { animations } from "@brb-ui/animations";

export interface IconProps extends CreateStyledProps<"span"> {
  /**
   * @description Svg icon
   * @default undefined
   */
  svg?: React.ReactNode;

  /**
   * @description Svg color
   * @default undefined
   */
  color?: string;

  /**
   * @description Components size
   * @default undefined
   */
  size?: number;

  /**
   * @description Animation type
   * @default undefined
   */
  animation?: keyof typeof animations;
}
