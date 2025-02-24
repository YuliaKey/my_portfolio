import React from "react";
import styled from "styled-components";

export type LinkType = {
  href: string;
  children: React.ReactNode;
  hoverColor?: string;
  hoverWeight?: string;
  color?: string;
  padding?: string;
  transition?: string;
  opacity?: string;
  hoverOpacity?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  clicked?: boolean;
};

export const StyledLink = styled.a.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "hoverColor",
      "hoverWeight",
      "padding",
      "transition",
      "color",
      "opacity",
      "hoverOpacity",
    ].includes(prop),
})<LinkType>`
  text-decoration: none;
  padding: ${({ padding }) => padding || "0"};
  transition: ${({ transition, theme }) =>
    transition || theme.transition.default};
  color: ${({ color, theme }) => color || theme.color.textSecondary};
  opacity: ${({ opacity }) => opacity || "1"};

  &:hover {
    color: ${({ theme, hoverColor }) => hoverColor || theme.color.textPrimary};
    font-weight: ${({ hoverWeight }) => hoverWeight || ""};
    opacity: ${({ hoverOpacity }) => hoverOpacity || "1"};
  }
`;
