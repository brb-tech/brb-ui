import { forwardRef, useEffect, useRef } from "react";
import { __DEV__, cx } from "@brb-ui/utils";
import { ButtonProps } from "./type";
import { useTheme } from "@brb-ui/system";
import { IconWrapper, Wrapper } from "./styles";
import { LoadingOutlinedIcon } from "@brb-ui/icons";
import { useSpring, animated, useTransition, useSpringRef, config } from "@brb-ui/transition";

const marginInline = (btnSize?: ButtonProps["size"], iconPlacement?: ButtonProps["iconPlacement"]) => {
  const key = iconPlacement === "left" ? "marginInlineEnd" : "marginInlineStart";
  let value = 6;
  switch (btnSize) {
    case "large":
      value = 8;
      break;
    case "middle":
      value = 6;
      break;
    case "small":
      value = 4;
      break;

    default:
      value = 6;
      break;
  }

  return {
    key,
    value
  };
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, loading, onClick, size, iconProps, iconPlacement, ...props }, ref) => {
    const { prefixCls } = useTheme();

    // const transRef = useSpringRef();

    const transitions = useTransition(loading, {
      initial: { transform: "scale(0)", opacity: 0, width: 0 },
      from: { transform: "scale(0)", opacity: 0, width: 0 },
      enter: { transform: "scale(1)", opacity: 1, width: 14 },
      leave: { transform: "scale(0)", opacity: 0, width: 0 },
      config: config.default
    });

    // useEffect(() => {
    //   if (loading) {
    //     transRef.start();
    //   }
    // }, [loading]);

    return (
      <Wrapper
        className={cx(`${prefixCls}-button`, className)}
        data-scheme={props.scheme}
        data-variant={props.variant}
        loading={loading ? "" : undefined}
        onClick={!loading ? onClick : undefined}
        iconPlacement={iconPlacement}
        size={size}
        ref={ref}
        {...props}
      >
        {children}

        {transitions((style, item) => {
          console.log(style, item);
          return (
            item && (
              <animated.div
                style={{ display: "inline-flex", alignItems: "flex-start", ...style }}
                className={`${prefixCls}-slide`}
              >
                <IconWrapper svg={<LoadingOutlinedIcon />} animation="rotation" btnSize={size} {...iconProps} />
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
