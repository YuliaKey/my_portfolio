import styled from "styled-components";

export type BoxType = {
  margin?: string;
  padding?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  background?: string;
  children: React.ReactNode;
  role?: string;
  tabIndex?: number;
  ariaLabel?: string;
};

export const StyledBox = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "margin",
      "padding",
      "background",
      "display",
      "justifyContent",
      "alignItems",
      "flexDirection",
      "gap",
    ].includes(prop),
})<BoxType>`
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  display: ${({ display }) => display || "block"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  gap: ${({ gap }) => gap || "0"};
  background: ${({ background }) => background || "none"};
`;
