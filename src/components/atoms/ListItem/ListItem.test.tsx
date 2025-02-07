import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { StyledListItem, StyledListItemType } from "./ListItem.styles";

const renderComponent = (props?: Partial<StyledListItemType>) =>
  render(<StyledListItem {...props}>List Item</StyledListItem>);

describe("<StyledListItem />", () => {
  test("renders with default styles", () => {
    renderComponent();
    const listItem = screen.getByText("List Item");

    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveStyle({
      display: "list-item",
      listStyle: "none",
      margin: "0",
      padding: "0",
    });
  });

  test("renders with custom margin and padding", () => {
    renderComponent({
      margin: "10px",
      padding: "5px",
    });

    const listItem = screen.getByText("List Item");
    const computedStyles = window.getComputedStyle(listItem);

    expect(computedStyles.margin).toBe("10px");
    expect(computedStyles.padding).toBe("5px");
  });

  test("renders as an <li> element", () => {
    renderComponent();
    const listItem = screen.getByText("List Item");

    expect(listItem.tagName).toBe("LI");
  });
});
