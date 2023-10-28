import { Button } from "../src";
import { accessibility, render } from "@brb-ui/jest";
import { BsFacebook } from "react-icons/bs";

test("passes accessibility test", async () => {
  await accessibility(<Button>test</Button>);
});

describe("renders correct with attributes:", () => {
  test("data-scheme", () => {
    const { getByTestId, container, rerender } = render(
      <Button scheme="primary" data-testid="btn">
        primary
      </Button>
    );
    expect(getByTestId("btn")).toHaveAttribute("data-scheme", "primary");
    expect(container).toMatchSnapshot();

    rerender(
      <Button scheme="warn" data-testid="btn">
        warn
      </Button>
    );
    expect(getByTestId("btn")).toHaveAttribute("data-scheme", "warn");
    expect(container).toMatchSnapshot();

    rerender(
      <Button scheme="default" data-testid="btn">
        default
      </Button>
    );
    expect(getByTestId("btn")).toHaveAttribute("data-scheme", "default");
    expect(container).toMatchSnapshot();

    rerender(
      <Button scheme="danger" data-testid="btn">
        danger
      </Button>
    );
    expect(getByTestId("btn")).toHaveAttribute("data-scheme", "danger");
    expect(container).toMatchSnapshot();

    rerender(
      <Button scheme="info" data-testid="btn">
        info
      </Button>
    );
    expect(getByTestId("btn")).toHaveAttribute("data-scheme", "info");
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
