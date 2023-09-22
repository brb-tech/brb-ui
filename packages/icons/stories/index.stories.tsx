import * as Icons from "../src";
import { Icon } from "@brb-ui/icon";

export default {
  title: "components/icons",
  argTypes: {
    color: {
      control: "color"
    },
    size: {
      control: "number"
    }
  }
};

type TProps = {
  color: string;
  size: number;
};

export const Default: React.FC<TProps> = ({ color, size }) => {
  return (
    <div>
      {Object.entries(Icons).map(([key, Component]) => (
        <Icon key={key} svg={<Component />} size={size} color={color} />
      ))}
    </div>
  );
};
