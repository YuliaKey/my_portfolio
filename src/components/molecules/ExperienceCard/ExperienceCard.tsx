import React from "react";

import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";

import {
  Arrow,
  Box,
  Card,
  Link,
  List,
  ListItem,
  SectionHeader,
  Tag,
  Typography,
} from "@atoms";

import { ExperienceCardOverlay } from "./ExperienceCard.styles";

export type ExperienceCardType = {
  title: string;
  description: string;
  company: string;
  date: string;
  technologies: string[];
  companyLink: string;
  hovered?: boolean;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
};

export const ExperienceCard: React.FC<ExperienceCardType> = ({
  title,
  description,
  company,
  date,
  technologies,
  companyLink,
  hovered,
  onMouseLeave,
  onMouseOver,
}) => {
  const theme = useTheme();

  const isSM = useMediaQuery({ query: "(min-width: 640px)" });
  const isMD = useMediaQuery({ query: "(min-width: 768px)" });
  const isLG = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <Card
      position="relative"
      display="grid"
      gridTemplateColumns={isSM ? "repeat(8, minmax(0, 1fr))" : ""}
      padding={`0 0 ${theme.spacing.xxxs} 0`}
      gap={isMD ? theme.spacing.sm : isSM ? theme.spacing.lg : ""}
      transition={isLG ? theme.transition.smooth : ""}
    >
      <ExperienceCardOverlay hovered={hovered} />
      <SectionHeader title={date} ariaLabel={date} />
      <Box gridColumn={isSM ? "span 6/ span 6" : ""} zIndex="10">
        <Typography
          as="h3"
          color={theme.color.textPrimary}
          fontSize={theme.fontSize.body}
          fontWeight={theme.fontWeight.semiBold}
          letterSpacing={theme.letterSpacing.sm}
          lineHeight={theme.lineHeight.sm}
        >
          <Link
            href={companyLink}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="CMA CGM (opens in a new tab)"
            hoverColor={theme.color.textTertiary}
            color={theme.color.textPrimary}
            style={{
              display: "inline-flex",
              alignItems: "baseline",
            }}
          >
            <span
              style={{
                position: "absolute",
                display: isLG ? "block" : "none",
                top: isMD ? "-1rem" : "-0.625rem",
                bottom: isMD ? "-1rem" : "-0.625rem",
                left: isMD ? "-1.5rem" : "-1rem",
                right: isMD ? "-1.5rem" : "-1rem",
                borderRadius: "0.25rem",
              }}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            />
            <Typography as="span">
              {title} ·
              <Typography
                as={"span"}
                display="inline-block"
                padding="0 0 0 4px"
              >
                {company}
              </Typography>
              <Arrow className={hovered ? "hovered" : ""} />
            </Typography>
          </Link>
        </Typography>
        <Typography
          as="p"
          fontSize={theme.fontSize.medium}
          lineHeight={theme.lineHeight.md}
          margin={`${theme.spacing.xxs} 0 0 0`}
          fontWeight={theme.fontWeight.regular}
          color={theme.color.textSecondary}
        >
          {description}
        </Typography>
        <List
          display="flex"
          flexWrap="wrap"
          margin={`${theme.spacing.xxs} 0 0 0`}
        >
          {technologies.map((techno, index) => (
            <ListItem
              key={`${techno}-${index}`}
              margin={`${theme.spacing.xxs} ${theme.spacing.xxs} 0 0`}
            >
              <Tag text={techno} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
};
