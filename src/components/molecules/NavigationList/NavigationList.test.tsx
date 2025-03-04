import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { NavigationList } from "./NavigationList";
import { darkTheme } from "@styles";
import { act } from "react";

describe("NavigationList Component", () => {
  let observeMock: jest.Mock;
  let unobserveMock: jest.Mock;
  let disconnectMock: jest.Mock;

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();

    observeMock = jest.fn();
    unobserveMock = jest.fn();
    disconnectMock = jest.fn();

    class MockIntersectionObserver {
      observe = observeMock;
      unobserve = unobserveMock;
      disconnect = disconnectMock;
      takeRecords = jest.fn();
    }

    global.IntersectionObserver = MockIntersectionObserver as unknown as {
      new (
        callback: IntersectionObserverCallback,
        options?: IntersectionObserverInit
      ): IntersectionObserver;
      prototype: IntersectionObserver;
    };
  });

  it("renders all navigation items", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <NavigationList />
      </ThemeProvider>
    );

    const menuItems = ["ABOUT", "EXPERIENCE", "PROJECTS", "CONTACT"];

    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("updates selected item on click", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <NavigationList />
      </ThemeProvider>
    );

    const projectsLink = screen.getByText("PROJECTS");

    act(() => {
      fireEvent.click(projectsLink);
    });

    expect(projectsLink).toHaveStyle("opacity: 1");
  });

  it("calls smooth scrolling when clicking a menu item", () => {
    const scrollIntoViewMock = jest.fn();
    jest.spyOn(global.document, "querySelector").mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    } as unknown as Element);

    render(
      <ThemeProvider theme={darkTheme}>
        <NavigationList />
      </ThemeProvider>
    );

    const aboutLink = screen.getByText("ABOUT");

    act(() => {
      fireEvent.click(aboutLink);
    });

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });

  it("sets up IntersectionObserver correctly", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <NavigationList />
      </ThemeProvider>
    );

    expect(global.IntersectionObserver).toBeDefined();
    expect(observeMock).toHaveBeenCalled();
  });
});
