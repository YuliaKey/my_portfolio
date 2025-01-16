import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { List } from "./List";
import { ListType } from "./List.styles";

const renderComponent = (props?: Partial<ListType>) =>
  render(
    <List {...props}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </List>
  );

describe("<List />", () => {
  test("renders children correctly", () => {
    renderComponent();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  test("renders with default styles", () => {
    renderComponent();
    const list = screen.getByRole("list");

    expect(list).toHaveStyle({
      listStyle: "none",
      padding: "0",
      margin: "0",
      width: "none",
    });
  });

  test("applies custom margin", () => {
    renderComponent({ margin: "10px" });
    const list = screen.getByRole("list");

    expect(list).toHaveStyle({
      margin: "10px",
    });
  });

  test("applies custom width", () => {
    renderComponent({ width: "200px" });
    const list = screen.getByRole("list");

    expect(list).toHaveStyle({
      width: "200px",
    });
  });
});
