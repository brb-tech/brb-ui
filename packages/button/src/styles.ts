import { styled } from "@brb-ui/system";
import { ButtonProps } from "./type";
import { Icon } from "@brb-ui/icon";

export const Wrapper = styled("button")<Omit<ButtonProps, "loading"> & { loading?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: transparent;
  background: transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${({ block }) => (block ? { width: "100%" } : {})}

  ${({ size }) => {
    switch (size) {
      case "large":
        return {
          height: 48,
          borderRadius: 10,
          fontSize: 16,
          padding: "0 16px"
        };
      case "middle":
        return {
          height: 40,
          borderRadius: 8,
          fontSize: 14,
          padding: "0 12px"
        };
      case "small":
        return {
          height: 32,
          borderRadius: 6,
          fontSize: 12,
          padding: "0 8px"
        };
      default:
        return {
          height: 40,
          borderRadius: 8,
          fontSize: 14,
          padding: "0 12px"
        };
    }
  }};

  ${({ theme, variant, scheme }) => {
    switch (scheme) {
      case "default":
        if (variant === "contained") {
          console.log(theme);

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

  &[disabled] {
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

export const IconWrapper = styled(Icon)<{ btnSize: ButtonProps["size"] }>(({ btnSize }) => ({
  // marginLeft: 0,
  // width: 0,
  // transform: "scale(0)",
  // opacity: 0,
  // transition: "all 0.3s",
  // transform: "scale(1)",
  // opacity: 1
}));
