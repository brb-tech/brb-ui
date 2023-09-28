import { Button } from "../src";
import { accessibility, render } from "@brb-ui/jest";

test("passes accessibility test", async () => {
  await accessibility(<Button>test</Button>);
});

test("renders correct text", () => {
  const { getByText } = render(<Button>Click me!</Button>);
  expect(getByText("Click me!")).toBeInTheDocument();
});
