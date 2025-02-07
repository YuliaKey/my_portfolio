import styled from "styled-components";

export type BoxType = {
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
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
  flexWrap?: string;
  gap?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridColumn?: string;
  gridRow?: string;
  background?: string;
  zIndex?: string;
  children: React.ReactNode;
};

export const StyledBox = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "position",
      "top",
      "bottom",
      "left",
      "right",
      "margin",
      "padding",
      "background",
      "display",
      "justifyContent",
      "alignItems",
      "flexDirection",
      "flexWrap",
      "gap",
      "gridTemplateColumns",
      "gridTemplateRows",
      "gridColumn",
      "gridRow",
      "width",
      "height",
      "maxWidth",
      "minHeight",
      "zIndex",
    ].includes(prop),
})<BoxType>`
  position: ${({ position }) => position || ""};
  top: ${({ top }) => top || ""};
  bottom: ${({ bottom }) => bottom || ""};
  left: ${({ left }) => left || ""};
  right: ${({ right }) => right || ""};
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
  flex-wrap: ${({ flexWrap }) => flexWrap || ""};
  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns || ""};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows || ""};
  grid-column: ${({ gridColumn }) => gridColumn || ""};
  grid-row: ${({ gridRow }) => gridRow || ""};
  gap: ${({ gap }) => gap || ""};
  background: ${({ background }) => background || ""};
  z-index: ${({ zIndex }) => zIndex || ""};
`;
