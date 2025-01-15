import React from "react";
import styled from "styled-components";

export type TypographyType = {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  fontWeight?: "bold" | "semiBold" | "regular";
  lineHeight?: string;
  fontSize?: string;
  letterSpacing?: string;
  color?: string;
  margin?: string;
  padding?: string;
  maxWidth?: string;
  opacity?: string;
  children: React.ReactNode;
  role?: string;
  tabIndex?: number;
};

export const StyledTypography = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "fontSize",
      "fontWeight",
      "lineHeight",
      "letterSpacing",
      "color",
      "margin",
      "padding",
      "maxWidth",
      "opacity",
    ].includes(prop),
})<TypographyType>`
  font-size: ${({ fontSize }) => fontSize || "inherit"};
  font-weight: ${({ fontWeight }) => fontWeight || "inherit"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "0"};
  line-height: ${({ lineHeight }) => lineHeight || "inherit"};
  color: ${({ color }) => color || "inherit"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  opacity: ${({ opacity }) => opacity || "1"};
`;
