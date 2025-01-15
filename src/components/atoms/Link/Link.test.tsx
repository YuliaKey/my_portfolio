import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeContext } from "styled-components";
import { LinkType } from "./Link.styles";
import { Link } from "./Link";

const mockTheme = {
  textPrimary: "#1F2937",
  textSecondary: "#94A3B8",
  transition: {
    default: "all 0.2s ease",
  },
  fontWeight: {
    bold: 700,
    regular: 400,
  },
};

const renderWithMockTheme = (props?: Partial<LinkType>) =>
  render(
    <ThemeContext.Provider value={mockTheme}>
      <Link {...props} href={props?.href || "#"}>
        Link Content
      </Link>
    </ThemeContext.Provider>
  );

describe("<Link />", () => {
  test("renders children correctly", () => {
    renderWithMockTheme();
    const link = screen.getByText("Link Content");
    expect(link).toBeInTheDocument();
  });

  test("applies custom padding", () => {
    renderWithMockTheme({ padding: "10px" });
    const link = screen.getByText("Link Content");

    expect(link).toHaveStyle({
      padding: "10px",
    });
  });

  test("applies hover styles", () => {
    renderWithMockTheme({
      hoverColor: "red",
      hoverWeight: "bold",
      hoverOpacity: "0.9",
    });
    const link = screen.getByText("Link Content");

    fireEvent.mouseOver(link);

    expect(link).toHaveStyle({
      color: "red",
      fontWeight: "bold",
      opacity: "0.9",
    });
  });

  test("renders with a valid href attribute", () => {
    renderWithMockTheme({ href: "/test-link" });
    const link = screen.getByText("Link Content");

    expect(link).toHaveAttribute("href", "/test-link");
  });

  test("executes onClick handler", () => {
    const handleClick = jest.fn();
    renderWithMockTheme({ onClick: handleClick });

    const link = screen.getByText("Link Content");
    fireEvent.click(link);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
