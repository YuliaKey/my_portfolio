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
      maxWidth: "none",
      opacity: "1",
    });
  });

  test("renders with custom font styles", () => {
    renderComponent({
      fontSize: "20px",
      fontWeight: "bold",
      letterSpacing: "1px",
      lineHeight: "1.5",
      color: "blue",
    });
    const typo = screen.getByText("Typography Content");

    expect(typo).toHaveStyle({
      fontSize: "20px",
      fontWeight: "bold",
      letterSpacing: "1px",
      lineHeight: "1.5",
      color: "blue",
    });
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

  test("renders with role and tabIndex for accessibility", () => {
    renderComponent({
      role: "heading",
      tabIndex: 0,
    });
    const typo = screen.getByRole("heading");

    expect(typo).toHaveAttribute("role", "heading");
    expect(typo).toHaveAttribute("tabIndex", "0");
  });

  test("renders with different HTML tags", () => {
    renderComponent({ as: "h1" });
    const typo = screen.getByText("Typography Content");

    // Assert the rendered tag is 'h1'
    expect(typo.tagName).toBe("H1");
  });
});
