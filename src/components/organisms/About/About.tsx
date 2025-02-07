import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { Typography } from "@atoms";
import { SectionContainer } from "@molecules";

export const About: React.FC = () => {
  const theme = useTheme();

  const { t } = useTranslation();

  const paragraphs = t("ABOUT_PARAGRAPHS", {
    returnObjects: true,
    defaultValue: [],
  }) as string[];

  return (
    <SectionContainer
      id="about"
      ariaLabel="About me"
      title={t("ABOUT") as string}
      className="sr-only"
    >
      {paragraphs.map((paragraph, index) => (
        <Typography
          key={`about-paragraph-${index}`}
          as="p"
          fontSize={theme.fontSize.body}
          lineHeight={theme.lineHeight.md}
          color={theme.textSecondary}
          margin={index !== paragraphs.length - 1 ? "0 0 1rem 0" : "0"}
        >
          {paragraph}
        </Typography>
      ))}
    </SectionContainer>
  );
};
