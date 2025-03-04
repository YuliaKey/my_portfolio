import { I18nextProvider } from "react-i18next";
import { renderHook, act } from "@testing-library/react";

import { useLanguageToggle } from "src/hooks/hooks";
import i18n from "src/i18n";

describe("useLanguageToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    i18n.changeLanguage("en");
  });

  it("should use the saved language from localStorage", () => {
    localStorage.setItem("language", "fr");

    renderHook(() => useLanguageToggle(), {
      wrapper: ({ children }) => (
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      ),
    });

    expect(i18n.language).toBe("fr");
  });

  it("should toggle language from English to French and vice versa", () => {
    const { result } = renderHook(() => useLanguageToggle(), {
      wrapper: ({ children }) => (
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      ),
    });

    act(() => {
      result.current.toggleLanguage();
    });

    expect(i18n.language).toBe("fr");
    expect(localStorage.getItem("language")).toBe("fr");

    act(() => {
      result.current.toggleLanguage();
    });

    expect(i18n.language).toBe("en");
    expect(localStorage.getItem("language")).toBe("en");
  });

  it("should return the correct currentLanguage value", () => {
    const { result } = renderHook(() => useLanguageToggle(), {
      wrapper: ({ children }) => (
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      ),
    });

    expect(result.current.currentLanguage).toBe("en");

    act(() => {
      result.current.toggleLanguage();
    });

    expect(result.current.currentLanguage).toBe("fr");
  });
});
