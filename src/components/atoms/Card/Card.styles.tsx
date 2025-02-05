import styled from "styled-components";

import { Paper } from "../Paper/Paper";

export type CardType = {
  transition?: string;

  // Flex properties
  display?: "flex" | "grid";
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;

  // Grid properties
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridColumn?: string;
  gridRow?: string;

  children: React.ReactNode;
  onClick?: () => void;
};

export const StyledCard = styled(Paper).withConfig({
  shouldForwardProp: (prop) =>
    ![
      "position",
      "transition",
      "display",
      "flexDirection",
      "justifyContent",
      "alignItems",
      "gap",
      "gridTemplateColumns",
      "gridTemplateRows",
      "gridColumn",
      "gridRow",
    ].includes(prop),
})<CardType>`
  display: ${({ display }) => display || "block"};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  align-items: ${({ alignItems }) => alignItems || ""};
  gap: ${({ gap }) => gap || ""};

  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns || ""};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows || ""};
  grid-column: ${({ gridColumn }) => gridColumn || ""};
  grid-row: ${({ gridRow }) => gridRow || ""};

  transition: ${({ transition }) => transition || ""};
  cursor: pointer;

  ${({ withHover, hoverBoxShadow, hoverTransform }) =>
    withHover &&
    `
    &:hover {
      transform: ${hoverTransform || ""};
      box-shadow: ${hoverBoxShadow || ""};
    }
  `}
`;
