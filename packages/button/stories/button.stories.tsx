import { useEffect, useState } from "react";
import { Button } from "../src";

export default {
  title: "components/button",
  component: Button
};

export const Default: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  }, [loading]);

  return (
    <Button onClick={setLoading.bind(null, true)} loading={loading} iconPlacement="left">
      this is a button
    </Button>
  );
};
