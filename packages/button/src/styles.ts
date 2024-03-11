import { styled } from "@brb-ui/system";
import { ButtonProps } from "./type";
import { Icon, IconProps } from "@brb-ui/icon";
import { CSSProperties } from "react";

export const btnFontSize: Record<Required<ButtonProps>["size"], number> = {
  large: 16,
  middle: 14,
  small: 12
};

export const btnHeight: Record<Required<ButtonProps>["size"], number> = {
  large: 40,
  middle: 32,
  small: 24
};

export const btnBorderRadius: Record<Required<ButtonProps>["size"], number> = {
  large: 6,
  middle: 4,
  small: 2
};

export const btnPaddingInline: Record<Required<ButtonProps>["size"], number> = {
  large: 16,
  middle: 12,
  small: 8
};

export const Wrapper = styled("button")<Omit<ButtonProps, "loading"> & { loading?: string; hasChildren?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: transparent;
  background: transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  ${({ iconPlacement }) => (iconPlacement === "left" ? { flexDirection: "row-reverse" } : {})}

  ${({ block }) => (block ? { width: "100%" } : {})}

  ${({ size, hasChildren, circle }) => {
    if (size) {
      return {
        height: btnHeight[size],
        borderRadius: circle ? "50%" : btnBorderRadius[size],
        fontSize: btnFontSize[size],
        ...(hasChildren
          ? {
              paddingInline: btnPaddingInline[size]
            }
          : {
              width: btnHeight[size]
            })
      };
    }
  }};

  ${({ theme, variant, scheme }) => {
    const currentColor = theme.system.colors[scheme || "slate"];
    if (variant === "contained") {
      return {
        background: currentColor[5],
        color: theme.system.colors.slate[12]
      };
    } else if (variant === "outlined") {
      return {
        borderColor: currentColor[5],
        color: currentColor[5]
      };
    } else if (variant === "text") {
      return {
        color: currentColor[5]
      };
    }
  }};

  :hover {
    ${({ theme, variant, scheme }) => {
      const currentColor = theme.system.colors[scheme || "slate"];

      if (variant === "contained") {
        return {
          background: currentColor[5],
          color: theme.system.colors.white
        };
      } else if (variant === "outlined") {
        return {
          borderColor: currentColor[5],
          color: currentColor[5],
          background: theme.system.colors.gray[2]
        };
      } else if (variant === "text") {
        return {
          color: currentColor[5]
        };
      }
    }}
  }

  :active {
    ${({ theme, variant, scheme }) => {
      const currentColor = theme.system.colors[scheme || "slate"];
      if (variant === "contained") {
        return {
          background: currentColor[7],
          color: theme.system.colors.white
        };
      } else if (variant === "outlined") {
        return {
          borderColor: currentColor[7],
          color: currentColor[7],
          background: theme.system.colors.gray[3]
        };
      } else if (variant === "text") {
        return {
          color: currentColor[7]
        };
      }
    }}
  }

  &:not([loading])[disabled] {
    cursor: not-allowed;
  }
  &[disabled],
  &[loading] {
    ${({ theme, variant, scheme }) => {
      const currentColor = theme.system.colors[scheme || "slate"];
      if (variant === "contained") {
        return {
          background: currentColor[3],
          color: currentColor[1]
        };
      } else if (variant === "outlined") {
        return {
          borderColor: currentColor[3],
          background: theme.system.colors.gray[1],
          color: currentColor[3]
        };
      } else if (variant === "text") {
        return {
          color: currentColor[3]
        };
      }
    }}
  }
`;

export const IconWrapper = styled(Icon)<{ _style?: CSSProperties }>(({ _style }) => {
  return _style ? { ..._style } : {};
});

export const iconMarginKey: Record<Required<ButtonProps>["iconPlacement"], keyof CSSProperties> = {
  left: "marginInlineEnd",
  right: "marginInlineStart"
};

export const iconMarginValue: Record<Required<ButtonProps>["size"], number> = {
  large: 8,
  middle: 6,
  small: 4
};

export const getIconWidth = (btnSize: ButtonProps["size"], size?: IconProps["size"]) => {
  if (size) return size;
  return btnFontSize[btnSize!];
};
