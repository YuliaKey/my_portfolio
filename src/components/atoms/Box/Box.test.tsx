import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BoxType } from "./Box.styles";
import { Box } from "./Box";

const renderComponent = (props?: Partial<BoxType>) =>
  render(<Box {...props}>Box Content</Box>);

describe("<Box />", () => {
  test("renders with default styles", () => {
    renderComponent();
    const box = screen.getByText("Box Content");

    expect(box).toHaveStyle({
      margin: "0",
      padding: "0",
      display: "block",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "row",
      gap: "0",
      background: "none",
    });
  });

  test("renders with custom margin and padding", () => {
    renderComponent({ margin: "10px", padding: "20px" });
    const box = screen.getByText("Box Content");

    expect(box).toHaveStyle({
      margin: "10px",
      padding: "20px",
    });
  });

  test("renders with flex properties", () => {
    renderComponent({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "5px",
    });
    const box = screen.getByText("Box Content");

    expect(box).toHaveStyle({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "5px",
    });
  });

  test("renders with background color", () => {
    renderComponent({ background: "blue" });
    const box = screen.getByText("Box Content");

    expect(box).toHaveStyle({
      background: "blue",
    });
  });

  test("renders with display none", () => {
    renderComponent({ display: "none" });
    const box = screen.getByText("Box Content");

    expect(box).toHaveStyle({
      display: "none",
    });
  });
});
