import styled from "styled-components";

export const NavigationListContainer = styled.nav.attrs({
  "aria-label": "Main Navigation",
  role: "navigation",
})`
  @media (max-width: 1024px) {
    display: none;
  }
`;
