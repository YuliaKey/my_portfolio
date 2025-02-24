import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { lightTheme } from "@styles";

import { Tag } from "./Tag";
import { hexToRgba, renderWithTheme } from "src/utils/test-utils";

describe("<Tag />", () => {
  test("renders correctly with default theme styles", () => {
    renderWithTheme(<Tag text="Default Tag" aria-label="tag-label" />);
    const tag = screen.getByText("Default Tag");
    const computedStyles = window.getComputedStyle(tag);

    expect(tag).toBeInTheDocument();
    expect(computedStyles.display).toBe("flex");
    expect(computedStyles.alignItems).toBe("center");
    expect(computedStyles.borderRadius).toBe("9999px");
    expect(computedStyles.padding).toBe(
      `${lightTheme.spacing.xxs} ${lightTheme.spacing.xs}`
    );
    expect(computedStyles.backgroundColor).toBe(
      hexToRgba(lightTheme.color.backgroundTag)
    );
    expect(computedStyles.color).toBe(hexToRgba(lightTheme.color.textTertiary));
    expect(computedStyles.lineHeight).toBe(lightTheme.lineHeight.sm);
    expect(computedStyles.fontWeight).toBe(lightTheme.fontWeight.semiBold);
    expect(computedStyles.fontSize).toBe(lightTheme.fontSize.small);
  });

  test("renders with custom styles", () => {
    renderWithTheme(
      <Tag
        text="Styled Tag"
        color="white"
        backgroundColor="blue"
        padding="8px 12px"
        borderRadius="4px"
        fontSize="14px"
        fontWeight="bold"
        lineHeight="1.2"
      />
    );

    const tag = screen.getByText("Styled Tag");
    const computedStyles = window.getComputedStyle(tag);

    expect(computedStyles.color).toBe("white");
    expect(computedStyles.backgroundColor).toBe("blue");
    expect(computedStyles.padding).toBe("8px 12px");
    expect(computedStyles.borderRadius).toBe("4px");
    expect(computedStyles.fontSize).toBe("14px");
    expect(computedStyles.fontWeight).toBe("bold");
    expect(computedStyles.lineHeight).toBe("1.2");
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    renderWithTheme(<Tag text="Clickable Tag" onClick={handleClick} />);
    const tag = screen.getByText("Clickable Tag");

    fireEvent.click(tag);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders as a <span> element", () => {
    renderWithTheme(<Tag text="Tag Element" />);
    const tag = screen.getByText("Tag Element");

    expect(tag.tagName).toBe("SPAN");
  });
});
