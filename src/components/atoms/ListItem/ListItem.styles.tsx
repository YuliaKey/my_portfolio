import styled from "styled-components";

export type StyledListItemType = {
  margin?: string;
  padding?: string;
};

export const StyledListItem = styled.li.withConfig({
  shouldForwardProp: (prop) => !["margin", "padding"].includes(prop),
})<StyledListItemType>`
  display: list-item;
  list-style: none;
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;
