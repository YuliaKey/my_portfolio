import styled from "styled-components";
import { BoxType } from "../Box/Box.styles";

export type ListType = Omit<BoxType, "background">;

export const StyledList = styled.ul.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "margin",
      "width",
      "display",
      "alignItems",
      "justifyContent",
      "gap",
    ].includes(prop),
})<ListType>`
  list-style: none;
  padding: 0;
  margin: ${({ margin }) => margin || 0};
  width: ${({ width }) => width || ""};
  display: ${({ display }) => display || "block"};
  align-items: ${({ alignItems }) => alignItems || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  gap: ${({ gap }) => gap || ""};
`;
