import styled from "styled-components";

export type PaperType = {
  display?: string;
  position?: string;
  padding?: string;
  margin?: string;
  boxShadow?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
  width?: string;
  height?: string;
  zIndex?: number;
  inset?: string;
  withHover?: boolean;
  hoverBackground?: string;
  hoverBoxShadow?: string;
  hoverTransform?: string;
};

export const StyledPaper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "position",
      "padding",
      "margin",
      "background",
      "border",
      "borderRadius",
      "boxShadow",
      "width",
      "height",
      "zIndex",
      "inset",
      "withHover",
      "hoverBackground",
      "hoverBoxShadow",
      "hoverTransform",
      "display",
    ].includes(prop),
})<PaperType>`
  display: ${({ display }) => display || "block"};
  position: ${({ position }) => position || ""};
  inset: ${({ inset }) => inset || ""};
  z-index: ${({ zIndex }) => zIndex || ""};
  background: ${({ background }) => background || ""};
  border: ${({ border }) => border || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  box-shadow: ${({ boxShadow }) => boxShadow || ""};
  padding: ${({ padding }) => padding || "0"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};

  ${({ withHover, hoverBackground, hoverBoxShadow, hoverTransform }) =>
    withHover &&
    `
    &:hover {
      background: ${hoverBackground || ""};
      box-shadow: ${hoverBoxShadow || ""};
      transform: ${hoverTransform || ""};
    }
  `}
`;
