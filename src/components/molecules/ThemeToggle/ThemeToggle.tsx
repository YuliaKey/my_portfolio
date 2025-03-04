import { Moon, Sun, Toggle, Typography } from "@atoms";
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
      activeIcon={
        <Typography
          as="span"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Moon />
        </Typography>
      }
      inactiveIcon={
        <Typography
          as="span"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Sun />
        </Typography>
      }
      ariaLabel={t("TOGGLE_MODE")}
    />
  );
};
