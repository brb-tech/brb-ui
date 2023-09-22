import { FaBeer } from "react-icons/fa";
import { Icon } from "../src";

export default {
  title: "components/icon",
  component: Icon,
  argTypes: {
    color: {
      control: "color"
    },
    size: {
      control: "number"
    },
    animation: {
      control: "select"
    }
  }
};

export const Default: React.FC = (props: any) => {
  return <Icon {...props} svg={<FaBeer />} />;
};
