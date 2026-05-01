import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Button } from "../src";
import { BsFacebook } from "react-icons/bs";

export default {
  title: "components/button",
  component: Button
};

const gridRow: CSSProperties = {
  display: "grid",
  gap: 8,
  width: "fit-content"
};

const gridColumn: CSSProperties = {
  display: "grid",
  gridAutoFlow: "column",
  gap: 12
};

export const Default: React.FC = () => {
  return (
    <div style={gridRow}>
      <div style={gridColumn}>
        <Button scheme="primary">Primary Contained</Button>
        <Button scheme="primary" variant="outlined">
          Primary Outlined
        </Button>
        <Button scheme="primary" variant="text">
          Primary Text
        </Button>
      </div>
      <div style={gridColumn}>
        <Button scheme="default">Default Contained</Button>
        <Button scheme="default" variant="outlined">
          Default Outlined
        </Button>
        <Button scheme="default" variant="text">
          Default Text
        </Button>
      </div>
      <div style={gridColumn}>
        <Button scheme="info">Info Contained</Button>
        <Button scheme="info" variant="outlined">
          Info Outlined
        </Button>
        <Button scheme="info" variant="text">
          Info Text
        </Button>
      </div>
      <div style={gridColumn}>
        <Button scheme="warn">Warn Contained</Button>
        <Button scheme="warn" variant="outlined">
          Warn Outlined
        </Button>
        <Button scheme="warn" variant="text">
          Warn Text
        </Button>
      </div>
      <div style={gridColumn}>
        <Button scheme="danger">Danger Contained</Button>
        <Button scheme="danger" variant="outlined">
          Danger Outlined
        </Button>
        <Button scheme="danger" variant="text">
          Danger Text
        </Button>
      </div>
    </div>
  );
};

export const Size: React.FC = () => {
  return (
    <div style={{ ...gridRow, width: 100 }}>
      <Button scheme="primary" size="large">
        Large
      </Button>
      <Button scheme="primary" size="middle">
        Middle
      </Button>
      <Button scheme="primary" size="small">
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
    <div style={gridRow}>
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
