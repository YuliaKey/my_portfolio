import { useState } from "react";
import i18n from "src/i18n";

import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { Arrow, Box, Link, List, ListItem, Typography } from "@atoms";
import { ExperienceCard, SectionContainer } from "@molecules";

import { useExperienceData } from "src/data/experience";

export const Experience: React.FC = () => {
  const theme = useTheme();

  const { t }: { t: (key: string) => string } = useTranslation();

  const cvFile =
    i18n.language === "fr" ? "assets/resume-fr.pdf" : "assets/resume-en.pdf";

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const experiences = useExperienceData();

  return (
    <SectionContainer
      id="experience"
      ariaLabel="My work experience"
      title={t("EXPERIENCE")}
      className="sr-only"
    >
      <Box>
        <List as="ol">
          {experiences.map(
            ({ TITLE, COMPANY, DESCRIPTION, DATE, TECHNOLOGIES }, index) => (
              <ListItem
                key={`${TITLE}-${index}`}
                margin={`0 0 ${theme.spacing.xl} 0`}
              >
                <ExperienceCard
                  title={TITLE}
                  company={COMPANY}
                  date={DATE}
                  description={DESCRIPTION}
                  technologies={TECHNOLOGIES}
                  hovered={hoveredCard === index}
                  onMouseOver={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                />
              </ListItem>
            )
          )}
        </List>
        <Box margin={`${theme.spacing.xl} 0 0 0`}>
          <Link
            href={cvFile}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t("CV_LINK_ARIA_LABEL")}
            transition={theme.transition.smooth}
            hoverColor={theme.color.textTertiary}
            color={theme.color.textPrimary}
            onMouseEnter={() => setIsLinkHovered(true)}
            onMouseLeave={() => setIsLinkHovered(false)}
          >
            <Typography
              as="span"
              display="inline-block"
              fontWeight={theme.fontWeight.bold}
              fontSize={theme.fontSize.body}
              lineHeight={theme.lineHeight.sm}
            >
              {t("CV_LINK")}
            </Typography>
            <Arrow className={isLinkHovered ? "hovered" : ""} />
          </Link>
        </Box>
      </Box>
    </SectionContainer>
  );
};
