import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "@styles";
import { Link } from "./Link";
import { LinkType } from "./Link.styles";

const renderWithTheme = (props?: Partial<LinkType>, theme = lightTheme) => {
  return render(
    <ThemeProvider theme={theme}>
      <Link {...props} href={props?.href || "#"}>
        Link Content
      </Link>
    </ThemeProvider>
  );
};

describe("<Link />", () => {
  test("renders with default theme values", () => {
    renderWithTheme();
    const link = screen.getByText("Link Content");

    expect(link).toBeInTheDocument();
    expect(link).toHaveStyle({
      padding: "0",
      transition: "color 0.3s",
      color: "#333333",
      opacity: "1",
    });
  });

  test("applies hover styles with default theme values", () => {
    renderWithTheme();
    const link = screen.getByText("Link Content");

    fireEvent.mouseOver(link);

    expect(link).toHaveStyle({
      color: lightTheme.textPrimary,
      fontWeight: `${lightTheme.fontWeight.bold}`,
      opacity: "1",
    });
  });

  test("overrides default styles with props", () => {
    renderWithTheme({
      padding: "10px",
      color: "blue",
      opacity: "0.7",
      hoverColor: "red",
      hoverWeight: "600",
      hoverOpacity: "0.9",
    });
    const link = screen.getByText("Link Content");

    expect(link).toHaveStyle({
      padding: "10px",
      color: "red",
      opacity: "0.9",
    });

    fireEvent.mouseOver(link);

    expect(link).toHaveStyle({
      color: "red",
      fontWeight: "600",
      opacity: "0.9",
    });
  });

  test("renders with a valid href attribute", () => {
    renderWithTheme({ href: "/test-link" });
    const link = screen.getByText("Link Content");

    expect(link).toHaveAttribute("href", "/test-link");
  });

  test("executes onClick handler", () => {
    const handleClick = jest.fn();
    renderWithTheme({ onClick: handleClick });

    const link = screen.getByText("Link Content");
    fireEvent.click(link);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies focus styles with default theme values", () => {
    renderWithTheme();
    const link = screen.getByText("Link Content");

    fireEvent.focus(link);

    expect(link).toHaveStyle({
      color: lightTheme.textPrimary,
      fontWeight: `${lightTheme.fontWeight.bold}`,
      opacity: "1",
    });
  });

  test("uses theme transition if no custom value is provided", () => {
    renderWithTheme();
    const link = screen.getByText("Link Content");

    expect(link).toHaveStyle({
      transition: lightTheme.transition.default,
    });
  });

  test("overrides theme transition with custom value", () => {
    renderWithTheme({ transition: "all 0.5s ease" });
    const link = screen.getByText("Link Content");

    expect(link).toHaveStyle({
      transition: "all 0.5s ease",
    });
  });
});
