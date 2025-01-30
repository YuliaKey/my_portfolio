import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";

import { Typography } from "@atoms";

import { ExperienceContainer, StickyContainer } from "./Experience.styles";

export const Experience: React.FC = () => {
  const theme = useTheme();

  const { t }: { t: (key: string) => string } = useTranslation();

  const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <ExperienceContainer id="experience" aria-label="Work experience">
      <StickyContainer className={"sr-only"}>
        <Typography
          as="h2"
          fontSize={theme.fontSize.medium}
          fontWeight={theme.fontWeight.bold}
          letterSpacing={theme.letterSpacing.sm}
          lineHeight={theme.lineHeight.sm}
          display={isSmallScreen ? "block" : "none"}
        >
          {t("EXPERIENCE")}
        </Typography>
      </StickyContainer>
    </ExperienceContainer>
  );
};
