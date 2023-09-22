import { forwardRef, useRef } from "react";
import { __DEV__, cx } from "@brb-ui/utils";
import { ButtonProps } from "./type";
import { useTheme } from "@brb-ui/system";
import { IconWrapper, Wrapper } from "./styles";
import { LoadingOutlinedIcon } from "@brb-ui/icons";
import { useSpring, animated } from "@brb-ui/transition";

const marginLeft = (btnSize?: ButtonProps["size"]) => {
  switch (btnSize) {
    case "large":
      return 8;
    case "middle":
      return 6;
    case "small":
      return 4;

    default:
      return 6;
  }
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, loading, onClick, size, iconProps, ...props }, ref) => {
    const { prefixCls } = useTheme();

    const spring = useSpring({
      display: "inline-flex",
      transform: loading ? "scale(1)" : "scale(0)",
      width: loading ? "auto" : 0,
      marginLeft: loading ? marginLeft(size) : 0,
      config: {
        duration: 300
      }
    });

    return (
      <Wrapper
        className={cx(`${prefixCls}-button`, className)}
        data-scheme={props.scheme}
        data-variant={props.variant}
        loading={loading ? "" : undefined}
        onClick={!loading ? onClick : undefined}
        size={size}
        ref={ref}
        {...props}
      >
        {children}

        <animated.div style={spring}>
          <IconWrapper svg={<LoadingOutlinedIcon />} animation="rotation" btnSize={size} {...iconProps} />
        </animated.div>
      </Wrapper>
    );
  }
);

Button.defaultProps = {
  scheme: "primary",
  variant: "contained",
  size: "middle",
  type: "button"
};

if (__DEV__) {
  Button.displayName = "Button";
}
