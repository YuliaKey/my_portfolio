import styled from "styled-components";

export type ListType = {
  margin?: string;
  width?: string;
  children: React.ReactNode;
};

const StyledList = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["margin"].includes(prop),
})<ListType>`
  list-style: none;
  padding: 0;
  margin: ${({ margin }) => margin || "0"};
  width: ${({ width }) => width || "none"};
`;

export default StyledList;
