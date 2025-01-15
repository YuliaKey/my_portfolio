import styled from "styled-components";

import { StyledLink } from "../Link/Link.styles";

export type IndicatorType = {
  selected?: boolean;
};

export const StyledIndicator = styled.span.withConfig({
  shouldForwardProp: (prop) => !["selected"].includes(prop),
})<IndicatorType>`
  display: inline-block;
  width: ${({ selected }) => (selected ? "4rem" : "2rem")};
  height: 1px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.textPrimary : theme.textSecondary};
  transition: ${({ theme }) => theme.transition.all};

  ${StyledLink}:hover & {
    width: 4rem;
    background-color: ${({ theme }) => theme.textPrimary};
  }
`;
