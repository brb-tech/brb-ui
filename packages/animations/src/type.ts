export interface AnimationProps {
  /**
   * @description Option to adjust button width to its parent width
   * @default undefined
   */
  svg?: React.ReactNode;

  /**
   * @description Start loading animation
   * @default undefined
   */
  loading?: boolean;

  /**
   * @description Components size
   * @default undefined
   */
  size?: number;

  /**
   * @description Animation type
   * @default "rotate"
   */
  type?: "rotate";
}
