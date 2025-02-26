import { useTranslation } from "react-i18next";

import { Toggle, Typography } from "@atoms";

import { useLanguageToggle } from "src/hooks/hooks";
import { useTheme } from "styled-components";

export const LanguageToggle = () => {
  const { toggleLanguage, currentLanguage } = useLanguageToggle();
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Toggle
      onToggle={toggleLanguage}
      activeState={currentLanguage === "en"}
      activeIcon={
        <Typography
          as="span"
          fontSize={theme.fontSize.small}
          color={theme.color.textPrimary}
        >
          EN
        </Typography>
      }
      inactiveIcon={
        <Typography
          as="span"
          fontSize={theme.fontSize.small}
          color={theme.color.textPrimary}
        >
          FR
        </Typography>
      }
      ariaLabel={t("TOGGLE_LANGUAGE")}
    />
  );
};
