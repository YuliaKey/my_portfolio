import { ReactNode } from "react";
import { renderHook } from "@testing-library/react";

import { ThemeContext, ThemeMode } from "src/context/ThemeContext";
import { useThemeContext } from "./hooks";

const mockThemeProvider = (theme: ThemeMode) => {
  return ({ children }: { children: ReactNode }) => (
    <ThemeContext.Provider value={{ theme, toggleTheme: jest.fn() }}>
      {children}
    </ThemeContext.Provider>
  );
};

describe("useThemeContext", () => {
  it("should return the current theme mode", () => {
    const { result } = renderHook(() => useThemeContext(), {
      wrapper: mockThemeProvider(ThemeMode.LIGHT),
    });

    expect(result.current.theme).toBe(ThemeMode.LIGHT);
  });

  it("should throw an error when used outside of ThemeProvider", () => {
    console.error = jest.fn();

    expect(() => renderHook(() => useThemeContext())).toThrow(
      "useThemeContext must be used within a ThemeProvider"
    );
  });

  it("should return a function for toggling the theme", () => {
    const mockToggleTheme = jest.fn();
    const { result } = renderHook(() => useThemeContext(), {
      wrapper: ({ children }) => (
        <ThemeContext.Provider
          value={{ theme: ThemeMode.DARK, toggleTheme: mockToggleTheme }}
        >
          {children}
        </ThemeContext.Provider>
      ),
    });

    expect(typeof result.current.toggleTheme).toBe("function");
  });
});
