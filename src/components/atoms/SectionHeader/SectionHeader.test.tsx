import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "@styles";

import { SectionHeader, SectionHeaderProps } from "./SectionHeader";

const renderComponent = (props?: Partial<SectionHeaderProps>) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <SectionHeader
        ariaLabel={props?.ariaLabel || "section-header"}
        title={props?.title}
      />
    </ThemeProvider>
  );

describe("<SectionHeader />", () => {
  test("renders correctly with default styles", () => {
    renderComponent();
    const header = screen.getByLabelText("section-header");

    expect(header).toBeInTheDocument();
    expect(header).toHaveStyle({
      opacity: "0.5",
      textTransform: "uppercase",
      zIndex: "10",
    });
  });

  test("renders with provided title", () => {
    renderComponent({ title: "Test Title" });
    const header = screen.getByText("Test Title");

    expect(header).toBeInTheDocument();
  });

  test("applies the correct aria-label for accessibility", () => {
    renderComponent({ ariaLabel: "custom-header-label" });
    const header = screen.getByLabelText("custom-header-label");

    expect(header).toBeInTheDocument();
  });

  test("renders as a <header> element", () => {
    renderComponent();
    const header = screen.getByLabelText("section-header");

    expect(header.tagName).toBe("HEADER");
  });
});
