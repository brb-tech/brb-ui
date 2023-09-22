import { styled } from "@brb-ui/system";
import { IconProps } from "./type";
import { animations } from "@brb-ui/animations";

export const Wrapper = styled.span<IconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => (color ? color : undefined)};
  font-size: ${({ size, theme }) => size || theme.system.inherit};

  ${({ animation }) => {
    if (animation) {
      return animations[animation];
    }
  }}
`;
