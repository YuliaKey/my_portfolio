import { useState } from "react";

import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { Box, Link, List, ListItem, Typography, ArrowRight } from "@atoms";
import { ProjectCard, SectionContainer } from "@molecules";
import { useProjectData } from "src/data/project";

export const Projects: React.FC = () => {
  const theme = useTheme();

  const { t }: { t: (key: string) => string } = useTranslation();

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const projects = useProjectData();

  return (
    <SectionContainer
      id="projects"
      ariaLabel="My personal projects"
      title={t("PROJECTS")}
      className="sr-only"
    >
      <Box>
        <List as="ol">
          {projects.map(
            (
              {
                NAME,
                DESCRIPTION,
                IMAGE_ALT,
                TECHNOLOGIES,
                IMAGE_SRC,
                PROJECT_LINK,
              },
              index
            ) => (
              <ListItem
                key={`${NAME}-${index}`}
                margin={`0 0 ${theme.spacing.xl} 0`}
              >
                <ProjectCard
                  name={NAME}
                  description={DESCRIPTION}
                  technologies={TECHNOLOGIES}
                  imageAlt={IMAGE_ALT}
                  imageSrc={IMAGE_SRC}
                  projectLink={PROJECT_LINK}
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
            href="https://github.com/YuliaKey?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t("PROJECTS_ARCHIVE_LINK_ARIA_LABEL")}
            transition={theme.transition.smooth}
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
              padding="0 0 1.5px 0"
              style={{
                borderBottom: isLinkHovered
                  ? `1px solid ${theme.color.textTertiary}`
                  : "1px solid transparent",
                transition: `${theme.transition.smooth}`,
              }}
            >
              {t("PROJECTS_ARCHIVE_LINK")}
            </Typography>
            <ArrowRight className={isLinkHovered ? "hovered" : ""} />
          </Link>
        </Box>
      </Box>
    </SectionContainer>
  );
};
