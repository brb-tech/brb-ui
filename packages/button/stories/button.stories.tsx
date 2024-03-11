import { useEffect, useState } from "react";
import { Button, ButtonProps } from "../src";
import { css, useTheme } from "@brb-ui/system";
import { BsFacebook } from "react-icons/bs";
import upperfirst from "lodash.upperfirst";

export default {
  title: "components/button",
  component: Button
};

const gridRow = css({
  display: "grid",
  gap: 8,
  width: "fit-content",
  padding: 24
});

const gridColumn = css({
  display: "grid",
  gridAutoFlow: "column",
  gap: 12
});

export const Default: React.FC = () => {
  const {
    system: { colors }
  } = useTheme();

  return (
    <div css={gridRow}>
      {Object.keys(colors).map((p) => {
        if (p.includes("white") || p.includes("black")) {
          return null;
        } else {
          const item = p as ButtonProps["scheme"];
          return (
            <div css={gridColumn} key={item}>
              <Button scheme={item}>{upperfirst(item)} Contained</Button>
              <Button scheme={item} variant="outlined">
                {upperfirst(item)} Outlined
              </Button>
              <Button scheme={item} variant="text">
                {upperfirst(item)} Text
              </Button>
            </div>
          );
        }
      })}
    </div>
  );
};

export const Size: React.FC = () => {
  return (
    <div css={gridRow}>
      <Button scheme="gray" size="large">
        Large
      </Button>
      <Button scheme="gray" size="middle">
        Middle
      </Button>
      <Button scheme="gray" size="small">
        Small
      </Button>
    </div>
  );
};

export const Loading: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  }, [loading]);

  return (
    <div css={css([gridRow])}>
      <Button onClick={setLoading.bind(null, true)} loading={loading}>
        Text
      </Button>

      <Button onClick={setLoading.bind(null, true)} loading={loading} icon={<BsFacebook />}>
        Facebook
      </Button>

      <Button onClick={setLoading.bind(null, true)} loading={loading} icon={<BsFacebook />} />

      <Button onClick={setLoading.bind(null, true)} loading={loading} icon={<BsFacebook />} circle />
    </div>
  );
};
