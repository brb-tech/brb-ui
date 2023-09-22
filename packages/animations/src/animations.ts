import { css } from "@brb-ui/system";
import { ROTATION } from "./keyframes";

export const rotation = css`
  animation-name: ${ROTATION};
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
