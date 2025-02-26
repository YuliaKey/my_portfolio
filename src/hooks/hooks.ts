import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "src/context/ThemeContext";

export const useLanguageToggle = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return { toggleLanguage, currentLanguage: i18n.language };
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
