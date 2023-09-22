import { forwardRef } from "react";
import { useTheme } from "@brb-ui/system";
import { __DEV__, cx } from "@brb-ui/utils";
import { IconProps } from "./type";
import { Wrapper } from "./styles";

export const Icon = forwardRef<HTMLSpanElement, IconProps>(({ svg, size, className, ...props }, ref) => {
  const { prefixCls } = useTheme();
  return (
    <Wrapper className={cx(`${prefixCls}-icon`, className)} ref={ref} size={size} {...props}>
      {svg}
    </Wrapper>
  );
});

Icon.defaultProps = {};

if (__DEV__) {
  Icon.displayName = "Icon";
}
