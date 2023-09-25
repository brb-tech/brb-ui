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
  large: 48,
  middle: 40,
  small: 32
};

export const btnBorderRadius: Record<Required<ButtonProps>["size"], number> = {
  large: 10,
  middle: 8,
  small: 6
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
    switch (scheme) {
      case "default":
        if (variant === "contained") {
          return {
            background: theme.system.blueGray[3],
            color: theme.system.gray[11]
          };
        } else if (variant === "outlined") {
          return {
            borderColor: theme.system.blueGray[4],
            color: theme.system.gray[11]
          };
        } else if (variant === "text") {
          return {
            color: theme.system.gray[11]
          };
        }
        break;
      case "primary":
        if (variant === "contained") {
          return {
            background: theme.system.primary[6],
            color: theme.system.white
          };
        } else if (variant === "outlined") {
          return {
            borderColor: theme.system.primary[6],
            color: theme.system.primary[6]
          };
        } else if (variant === "text") {
          return {
            color: theme.system.primary[6]
          };
        }
        break;

      case "info":
        if (variant === "contained") {
          return {
            background: theme.system.green[6],
            color: theme.system.white
          };
        } else if (variant === "outlined") {
          return {
            borderColor: theme.system.green[6],
            color: theme.system.green[6]
          };
        } else if (variant === "text") {
          return {
            color: theme.system.green[6]
          };
        }
        break;

      case "danger":
        if (variant === "contained") {
          return {
            background: theme.system.red[6],
            color: theme.system.white
          };
        } else if (variant === "outlined") {
          return {
            borderColor: theme.system.red[6],
            color: theme.system.red[6]
          };
        } else if (variant === "text") {
          return {
            color: theme.system.red[6]
          };
        }
        break;
      case "warn":
        if (variant === "contained") {
          return {
            background: theme.system.yellow[6],
            color: theme.system.white
          };
        } else if (variant === "outlined") {
          return {
            borderColor: theme.system.yellow[6],
            color: theme.system.yellow[6]
          };
        } else if (variant === "text") {
          return {
            color: theme.system.yellow[6]
          };
        }
        break;

      default:
        if (variant === "contained") {
          return {
            background: theme.system.blueGray[3],
            color: theme.system.gray[11]
          };
        } else if (variant === "outlined") {
          return {
            borderColor: theme.system.blueGray[4],
            color: theme.system.gray[11]
          };
        } else if (variant === "text") {
          return {
            color: theme.system.gray[11]
          };
        }
    }
  }};

  :hover {
    ${({ theme, variant, scheme }) => {
      switch (scheme) {
        case "default":
          if (variant === "contained") {
            return {
              background: theme.system.blueGray[2],
              color: theme.system.gray[11]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.blueGray[4],
              color: theme.system.gray[11],
              background: theme.system.blueGray[2]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.gray[9]
            };
          }
          break;

        case "primary":
          if (variant === "contained") {
            return {
              background: theme.system.primary[5],
              color: theme.system.white
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.primary[5],
              color: theme.system.primary[5],
              background: theme.system.blueGray[2]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.primary[5]
            };
          }
          break;

        case "info":
          if (variant === "contained") {
            return {
              background: theme.system.green[5],
              color: theme.system.white
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.green[5],
              background: theme.system.blueGray[2],
              color: theme.system.green[5]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.green[5]
            };
          }
          break;

        case "danger":
          if (variant === "contained") {
            return {
              background: theme.system.red[5],
              color: theme.system.white
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.red[5],
              background: theme.system.blueGray[2],
              color: theme.system.red[5]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.red[5]
            };
          }
          break;

        case "warn":
          if (variant === "contained") {
            return {
              background: theme.system.yellow[5],
              color: theme.system.white
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.yellow[5],
              background: theme.system.blueGray[2],
              color: theme.system.yellow[5]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.yellow[5]
            };
          }
          break;

        default:
          if (variant === "contained") {
            return {
              background: theme.system.blueGray[2],
              color: theme.system.gray[11]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.blueGray[4],
              color: theme.system.gray[11],
              background: theme.system.blueGray[2]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.gray[9]
            };
          }
      }
    }}
  }

  :focus {
    ${({ theme, variant, scheme }) => {
      switch (scheme) {
        case "default":
          if (variant === "contained") {
            return {
              background: theme.system.blueGray[4],
              color: theme.system.gray[11]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.blueGray[4],
              color: theme.system.gray[11],
              background: theme.system.blueGray[3]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.gray[11]
            };
          }
          break;

        case "primary":
          if (variant === "contained") {
            return {
              background: theme.system.primary[7],
              color: theme.system.white
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.primary[7],
              color: theme.system.primary[7],
              background: theme.system.blueGray[3]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.primary[7]
            };
          }
          break;

        case "info":
          if (variant === "contained") {
            return {
              background: theme.system.green[7],
              color: theme.system.white
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.green[7],
              background: theme.system.blueGray[3],
              color: theme.system.green[7]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.green[7]
            };
          }
          break;

        case "danger":
          if (variant === "contained") {
            return {
              background: theme.system.red[7],
              color: theme.system.white
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.red[7],
              background: theme.system.blueGray[3],
              color: theme.system.red[7]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.red[7]
            };
          }
          break;

        case "warn":
          if (variant === "contained") {
            return {
              background: theme.system.yellow[7],
              color: theme.system.white
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.yellow[7],
              background: theme.system.blueGray[3],
              color: theme.system.yellow[7]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.yellow[7]
            };
          }
          break;

        default:
          if (variant === "contained") {
            return {
              background: theme.system.blueGray[4],
              color: theme.system.gray[11]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.blueGray[4],
              color: theme.system.gray[11],
              background: theme.system.blueGray[3]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.gray[11]
            };
          }
      }
    }}
  }

  &:not([loading])[disabled] {
    cursor: not-allowed;
  }
  &[disabled],
  &[loading] {
    ${({ theme, variant, scheme }) => {
      switch (scheme) {
        case "default":
          if (variant === "contained") {
            return {
              background: theme.system.blueGray[2],
              color: theme.system.gray[5]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.blueGray[3],
              color: theme.system.gray[5],
              background: theme.system.blueGray[1]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.gray[5]
            };
          }
          break;

        case "primary":
          if (variant === "contained") {
            return {
              background: theme.system.primary[3],
              color: theme.system.primary[1]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.primary[3],
              background: theme.system.blueGray[1],
              color: theme.system.primary[3]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.primary[3]
            };
          }
          break;

        case "info":
          if (variant === "contained") {
            return {
              background: theme.system.green[3],
              color: theme.system.green[1]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.green[3],
              background: theme.system.blueGray[1],
              color: theme.system.green[3]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.green[3]
            };
          }
          break;

        case "danger":
          if (variant === "contained") {
            return {
              background: theme.system.red[3],
              color: theme.system.red[1]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.red[3],
              background: theme.system.blueGray[1],
              color: theme.system.red[3]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.red[3]
            };
          }
          break;

        case "warn":
          if (variant === "contained") {
            return {
              background: theme.system.yellow[3],
              color: theme.system.yellow[1]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.yellow[3],
              background: theme.system.blueGray[1],
              color: theme.system.yellow[3]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.yellow[3]
            };
          }
          break;

        default:
          if (variant === "contained") {
            return {
              background: theme.system.blueGray[2],
              color: theme.system.gray[5]
            };
          } else if (variant === "outlined") {
            return {
              borderColor: theme.system.blueGray[3],
              color: theme.system.gray[5],
              background: theme.system.blueGray[1]
            };
          } else if (variant === "text") {
            return {
              color: theme.system.gray[5]
            };
          }
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
