import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { PaperType, StyledPaper } from "./Paper.styles";

const renderComponent = (props?: Partial<PaperType>) =>
  render(<StyledPaper {...props}>Paper Content</StyledPaper>);

describe("<StyledPaper />", () => {
  test("renders with default styles", () => {
    renderComponent();
    const paper = screen.getByText("Paper Content");

    expect(paper).toBeInTheDocument();
    expect(paper).toHaveStyle({
      display: "block",
      width: "100%",
      height: "auto",
      padding: "0",
    });
  });

  test("renders with custom styles", () => {
    renderComponent({
      display: "flex",
      position: "absolute",
      inset: "10px",
      zIndex: 5,
      background: "blue",
      border: "1px solid black",
      borderRadius: "8px",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
      padding: "20px",
      margin: "15px",
      width: "200px",
      height: "150px",
    });

    const paper = screen.getByText("Paper Content");
    const computedStyles = window.getComputedStyle(paper);

    expect(computedStyles.display).toBe("flex");
    expect(computedStyles.position).toBe("absolute");
    expect(computedStyles.inset).toBe("10px");
    expect(computedStyles.zIndex).toBe("5");
    expect(computedStyles.backgroundColor).toBe("blue");
    expect(computedStyles.border).toBe("1px solid black");
    expect(computedStyles.borderRadius).toBe("8px");
    expect(computedStyles.boxShadow).toBe("2px 2px 10px rgba(0, 0, 0, 0.5)");
    expect(computedStyles.padding).toBe("20px");
    expect(computedStyles.margin).toBe("15px");
    expect(computedStyles.width).toBe("200px");
    expect(computedStyles.height).toBe("150px");
  });

  test("applies hover styles when withHover is true", () => {
    renderComponent({
      withHover: true,
      hoverBackground: "red",
      hoverBoxShadow: "4px 4px 15px rgba(0, 0, 0, 0.3)",
      hoverTransform: "scale(1.1)",
    });

    const paper = screen.getByText("Paper Content");

    fireEvent.mouseOver(paper);

    const computedStyles = window.getComputedStyle(paper);

    expect(computedStyles.backgroundColor).toBe("red");
    expect(computedStyles.boxShadow).toBe("4px 4px 15px rgba(0, 0, 0, 0.3)");
    expect(computedStyles.transform).toBe("scale(1.1)");
  });
});
