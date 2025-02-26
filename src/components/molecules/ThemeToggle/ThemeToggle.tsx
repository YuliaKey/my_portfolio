import { Moon, Sun, Toggle } from "@atoms";
import { useTranslation } from "react-i18next";
import { ThemeMode } from "src/context/ThemeContext";
import { useThemeContext } from "src/hooks/hooks";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { t } = useTranslation();

  return (
    <Toggle
      onToggle={toggleTheme}
      activeState={theme === ThemeMode.LIGHT}
      activeIcon={<Moon />}
      inactiveIcon={<Sun />}
      ariaLabel={t("TOGGLE_MODE")}
    />
  );
};
