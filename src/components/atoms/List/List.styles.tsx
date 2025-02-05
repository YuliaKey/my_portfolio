import styled from "styled-components";
import { BoxType } from "../Box/Box.styles";

export type ListType = Omit<BoxType, "background"> & {
  as?: "ul" | "ol";
};

export const StyledList = styled.ul.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "margin",
      "width",
      "display",
      "alignItems",
      "justifyContent",
      "gap",
      "flexDirection",
      "flexWrap",
    ].includes(prop),
})<ListType>`
  list-style: none;
  padding: 0;
  margin: ${({ margin }) => margin || 0};
  width: ${({ width }) => width || ""};
  display: ${({ display }) => display || ""};
  align-items: ${({ alignItems }) => alignItems || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  flex-wrap: ${({ flexWrap }) => flexWrap || ""};
  gap: ${({ gap }) => gap || ""};
`;
