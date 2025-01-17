import styled from "styled-components";

export type BoxType = {
  margin?: string;
  padding?: string;
  display?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  minHeight?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  background?: string;
  children: React.ReactNode;
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
      "width",
      "height",
      "maxWidth",
      "minHeight",
    ].includes(prop),
})<BoxType>`
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
  min-height: ${({ minHeight }) => minHeight || ""};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  display: ${({ display }) => display || "block"};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  align-items: ${({ alignItems }) => alignItems || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  gap: ${({ gap }) => gap || ""};
  background: ${({ background }) => background || ""};
`;
