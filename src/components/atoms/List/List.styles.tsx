import styled from "styled-components";

export type ListType = {
  margin?: string;
  width?: string;
  children: React.ReactNode;
};

export const StyledList = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["margin", "width"].includes(prop),
})<ListType>`
  list-style: none;
  padding: 0;
  margin: ${({ margin }) => margin || "0"};
  width: ${({ width }) => width || "none"};
`;
