import { forwardRef } from "react";
import { __DEV__, cx } from "@brb-ui/utils";
import { ButtonProps } from "./type";
import { useTheme } from "@brb-ui/system";
import { Wrapper, marginKey, marginValue, getIconWidth } from "./styles";
import { LoadingOutlinedIcon } from "@brb-ui/icons";
import { animated, useTransition } from "@brb-ui/transition";
import { Icon } from "@brb-ui/icon";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, loading, size, iconProps, iconPlacement, disabled, ...props }, ref) => {
    const { prefixCls } = useTheme();

    const transitions = useTransition(loading, {
      initial: { transform: "scale(0)", opacity: 0, width: 0, [marginKey[iconPlacement!]]: 0 },
      from: { transform: "scale(0)", opacity: 0, width: 0, [marginKey[iconPlacement!]]: 0 },
      enter: {
        transform: "scale(1)",
        opacity: 1,
        width: getIconWidth(size, iconProps?.size),
        [marginKey[iconPlacement!]]: marginValue[size!]
      },
      leave: { transform: "scale(0)", opacity: 0, width: 0, [marginKey[iconPlacement!]]: 0 }
    });

    return (
      <Wrapper
        className={cx(`${prefixCls}-button`, className)}
        data-scheme={props.scheme}
        data-variant={props.variant}
        loading={loading ? "" : undefined}
        iconPlacement={iconPlacement}
        size={size}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {children}

        {transitions((style, item) => {
          return (
            item && (
              <animated.div
                style={{ display: "inline-flex", alignItems: "flex-start", ...style }}
                className={`${prefixCls}-slide`}
              >
                <Icon svg={<LoadingOutlinedIcon />} animation="rotation" {...iconProps} />
              </animated.div>
            )
          );
        })}
      </Wrapper>
    );
  }
);

Button.defaultProps = {
  scheme: "primary",
  variant: "contained",
  size: "middle",
  type: "button",
  iconPlacement: "right"
};

if (__DEV__) {
  Button.displayName = "Button";
}
