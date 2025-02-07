import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { TypographyType } from "./Typography.styles";
import { Typography } from "./Typography";

const renderComponent = (props?: Partial<TypographyType>) =>
  render(<Typography {...props}>Typography Content</Typography>);

describe("<Typography />", () => {
  test("renders with default styles", () => {
    renderComponent();
    const typo = screen.getByText("Typography Content");

    expect(typo).toHaveStyle({
      fontSize: "inherit",
      fontWeight: "inherit",
      letterSpacing: "0",
      lineHeight: "inherit",
      color: "inherit",
      margin: "0",
      padding: "0",
      maxWidth: "",
      opacity: "1",
      display: "block",
    });
  });

  test("renders with custom font styles", () => {
    renderComponent({
      fontSize: "20px",
      fontWeight: "400",
      display: "inline",
    });
    const typo = screen.getByText("Typography Content");

    const computedStyles = window.getComputedStyle(typo);

    expect(computedStyles.fontSize).toBe("20px");
    expect(computedStyles.fontWeight).toBe("400");
    expect(computedStyles.display).toBe("inline");
  });

  test("renders with custom spacing", () => {
    renderComponent({
      margin: "10px",
      padding: "5px",
    });
    const typo = screen.getByText("Typography Content");

    expect(typo).toHaveStyle({
      margin: "10px",
      padding: "5px",
    });
  });

  test("renders with maxWidth and opacity", () => {
    renderComponent({
      maxWidth: "500px",
      opacity: "0.5",
    });
    const typo = screen.getByText("Typography Content");

    expect(typo).toHaveStyle({
      maxWidth: "500px",
      opacity: "0.5",
    });
  });

  test("renders with different HTML tags", () => {
    renderComponent({ as: "h1" });
    const typo = screen.getByText("Typography Content");

    expect(typo.tagName).toBe("H1");
  });
});
