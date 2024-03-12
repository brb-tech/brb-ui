import { Button } from "../src";
import { accessibility, render } from "@brb-ui/jest";
import React from "react";
import { BsFacebook } from "react-icons/bs";

test("passes accessibility test", async () => {
  await accessibility(<Button>test</Button>);
});

describe("renders correct with attributes:", () => {
  test("data-scheme", () => {
    const { getByTestId, container, rerender } = render(
      <Button scheme="gray" data-testid="btn">
        gray
      </Button>
    );
    expect(getByTestId("btn")).toHaveAttribute("data-scheme", "gray");
    expect(container).toMatchSnapshot();

    rerender(
      <Button scheme="slate" data-testid="btn">
        slate
      </Button>
    );
    expect(getByTestId("btn")).toHaveAttribute("data-scheme", "slate");
    expect(container).toMatchSnapshot();
  });

  test("data-variant", () => {
    const { getByTestId, container, rerender } = render(<Button data-testid="btn">contained</Button>);
    expect(getByTestId("btn")).toHaveAttribute("data-variant", "contained");
    expect(container).toMatchSnapshot();

    rerender(
      <Button variant="outlined" data-testid="btn">
        outlined
      </Button>
    );
    expect(getByTestId("btn")).toHaveAttribute("data-variant", "outlined");
    expect(container).toMatchSnapshot();

    rerender(
      <Button variant="text" data-testid="btn">
        outlined
      </Button>
    );
    expect(getByTestId("btn")).toHaveAttribute("data-variant", "text");
    expect(container).toMatchSnapshot();
  });
});

test("renders correct with loading", () => {
  const { container, getByTestId } = render(
    <Button loading data-testid="btn" icon={<BsFacebook />}>
      Loading
    </Button>
  );
  expect(getByTestId("btn")).toHaveAttribute("loading");
  expect(container).toMatchSnapshot();
});

describe("renders correct with icon", () => {
  test("in props", () => {
    const { container } = render(<Button icon={<BsFacebook />}>Loading</Button>);
    expect(container).toMatchSnapshot();
  });

  test("no children", () => {
    const { container } = render(<Button icon={<BsFacebook />} />);
    expect(container).toMatchSnapshot();
  });
});
