import React from "react";

import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";

import { Typography } from "@atoms";

import { SectionWrapper, StickyHeader } from "./SectionContainer.styles";

type SectionContainerProps = {
  id: string;
  ariaLabel: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  ariaLabel,
  title,
  className,
  children,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <SectionWrapper id={id} aria-label={ariaLabel}>
      {title && (
        <StickyHeader className={className}>
          <Typography
            as="h2"
            color={theme.color.textPrimary}
            fontSize={theme.fontSize.medium}
            fontWeight={theme.fontWeight.bold}
            letterSpacing={theme.letterSpacing.sm}
            lineHeight={theme.lineHeight.sm}
            display={isSmallScreen ? "block" : "none"}
          >
            {title}
          </Typography>
        </StickyHeader>
      )}
      {children}
    </SectionWrapper>
  );
};
