import i18n from "i18next";

export const useLanguageToggle = () => {
  const toggleLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  return { toggleLanguage };
};
