import { useState } from "react";

import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { Box, List, ListItem } from "@atoms";
import { ExperienceCard, SectionContainer } from "@molecules";
import { useExperienceData } from "src/data/experienceData";

export const Experience: React.FC = () => {
  const theme = useTheme();

  const { t }: { t: (key: string) => string } = useTranslation();

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      </Box>
    </SectionContainer>
  );
};
