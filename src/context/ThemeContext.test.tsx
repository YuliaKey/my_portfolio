import { act } from "react";
import { renderHook } from "@testing-library/react";

import { ThemeMode, AppThemeProvider } from "src/context/ThemeContext";
import { useThemeContext } from "src/hooks/hooks";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AppThemeProvider>{children}</AppThemeProvider>
);

describe("ThemeContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should provide the default theme mode as DARK", () => {
    const { result } = renderHook(() => useThemeContext(), { wrapper });

    expect(result.current.theme).toBe(ThemeMode.DARK);
  });

  it("should toggle the theme mode correctly", () => {
    const { result } = renderHook(() => useThemeContext(), { wrapper });

    expect(result.current.theme).toBe(ThemeMode.DARK);

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe(ThemeMode.LIGHT);
  });

  it("should persist theme selection in localStorage", () => {
    localStorage.setItem("theme", ThemeMode.LIGHT);

    const { result } = renderHook(() => useThemeContext(), { wrapper });

    expect(result.current.theme).toBe(ThemeMode.LIGHT);
  });

  it("should update localStorage when theme changes", () => {
    const { result } = renderHook(() => useThemeContext(), { wrapper });

    expect(localStorage.getItem("theme")).toBe(ThemeMode.DARK);

    act(() => {
      result.current.toggleTheme();
    });

    expect(localStorage.getItem("theme")).toBe(ThemeMode.LIGHT);
  });

  it("should throw an error if used outside ThemeProvider", () => {
    const consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => {
      renderHook(() => useThemeContext());
    }).toThrowError("useThemeContext must be used within a ThemeProvider");

    consoleErrorMock.mockRestore();
  });
});
