import { forwardRef } from "react";
import { __DEV__, cx } from "@brb-ui/utils";
import { ButtonProps } from "./type";
import { useTheme } from "@brb-ui/system";
import { Wrapper, iconMarginKey, iconMarginValue, getIconWidth, IconWrapper } from "./styles";
import { LoadingOutlinedIcon } from "@brb-ui/icons";
import { animated, useTransition } from "@brb-ui/transition";
import { Icon } from "@brb-ui/icon";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      loading,
      size = "middle",
      iconPlacement = "right",
      disabled,
      loadingIcon = <LoadingOutlinedIcon />,
      iconSize,
      icon,
      iconAnimation,
      iconColor,
      scheme = "primary",
      variant = "contained",
      type = "button",
      ...rest
    },
    ref
  ) => {
    const { prefixCls } = useTheme();

    const transitions = useTransition(loading, {
      initial: { transform: "scale(0)", opacity: 0, width: 0, [iconMarginKey[iconPlacement!]]: 0 },
      from: { transform: "scale(0)", opacity: 0, width: 0, [iconMarginKey[iconPlacement!]]: 0 },
      enter: {
        transform: "scale(1)",
        opacity: 1,
        width: getIconWidth(size, iconSize),
        [iconMarginKey[iconPlacement!]]: children ? iconMarginValue[size!] : 0
      },
      leave: { transform: "scale(0)", opacity: 0, width: 0, [iconMarginKey[iconPlacement!]]: 0 }
    });

    return (
      <Wrapper
        className={cx(`${prefixCls}-button`, className)}
        data-scheme={scheme}
        data-variant={variant}
        loading={loading ? "" : undefined}
        iconPlacement={iconPlacement}
        size={size}
        ref={ref}
        hasChildren={!!children}
        disabled={disabled || loading}
        type={type}
        {...rest}
      >
        {children}

        {icon ? (
          <IconWrapper
            svg={loading ? loadingIcon : icon}
            animation={loading ? iconAnimation || "rotation" : undefined}
            _style={children ? { [iconMarginKey[iconPlacement!]]: iconMarginValue[size!] } : undefined}
            size={iconSize}
            color={iconColor}
          />
        ) : (
          transitions((style, item) => {
            return item ? (
              <animated.div
                style={{ display: "inline-flex", alignItems: "flex-start", ...style }}
                className={`${prefixCls}-slide`}
              >
                <Icon
                  svg={loadingIcon}
                  animation={loading ? iconAnimation || "rotation" : undefined}
                  size={iconSize}
                  color={iconColor}
                />
              </animated.div>
            ) : null;
          })
        )}
      </Wrapper>
    );
  }
);

if (__DEV__) {
  Button.displayName = "Button";
}
