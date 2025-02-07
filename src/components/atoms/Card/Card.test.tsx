import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CardType, StyledCard } from "./Card.styles";

const renderComponent = (props?: Partial<CardType>) =>
  render(<StyledCard {...props}>Card Content</StyledCard>);

describe("<Card />", () => {
  test("renders with default styles", () => {
    renderComponent();
    const card = screen.getByText("Card Content");

    expect(card).toHaveStyle({
      display: "block",
      flexDirection: "",
      justifyContent: "",
      alignItems: "",
      gap: "",
      gridTemplateColumns: "",
      gridTemplateRows: "",
      gridColumn: "",
      gridRow: "",
      transition: "",
      cursor: "pointer",
    });
  });

  test("renders with custom flex styles", () => {
    renderComponent({
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "10px",
    });

    const card = screen.getByText("Card Content");
    const computedStyles = window.getComputedStyle(card);

    expect(computedStyles.display).toBe("flex");
    expect(computedStyles.flexDirection).toBe("row");
    expect(computedStyles.justifyContent).toBe("center");
    expect(computedStyles.alignItems).toBe("flex-start");
    expect(computedStyles.gap).toBe("10px");
  });

  test("renders with custom grid styles", () => {
    renderComponent({
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "auto",
      gridColumn: "1 / span 2",
      gridRow: "2 / span 3",
    });

    const card = screen.getByText("Card Content");
    const computedStyles = window.getComputedStyle(card);

    expect(computedStyles.display).toBe("grid");
    expect(computedStyles.gridTemplateColumns).toBe("repeat(2, 1fr)");
    expect(computedStyles.gridTemplateRows).toBe("auto");

    const normalizeGridValue = (value: string) => value.replace(/\s+/g, "");

    expect(normalizeGridValue(computedStyles.gridColumn)).toBe("1/span2");
    expect(normalizeGridValue(computedStyles.gridRow)).toBe("2/span3");
  });

  test("applies transition effect", () => {
    renderComponent({ transition: "all 0.3s ease-in-out" });

    const card = screen.getByText("Card Content");

    expect(card).toHaveStyle({
      transition: "all 0.3s ease-in-out",
    });
  });

  test("renders with hover styles when withHover is true", () => {
    renderComponent({
      withHover: true,
      hoverBoxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      hoverTransform: "scale(1.05)",
    });

    const card = screen.getByText("Card Content");

    fireEvent.mouseOver(card);

    const computedStyles = window.getComputedStyle(card);

    expect(computedStyles.transform).toBe("scale(1.05)");
    expect(computedStyles.boxShadow).toBe("0px 4px 10px rgba(0,0,0,0.2)");
  });

  test("calls onClick function when clicked", () => {
    const handleClick = jest.fn();
    renderComponent({ onClick: handleClick });

    const card = screen.getByText("Card Content");
    card.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
