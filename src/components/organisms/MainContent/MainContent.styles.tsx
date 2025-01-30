import styled from "styled-components";

export const ContentSectionContainer = styled.main`
  padding-top: ${({ theme }) => theme.spacing.xxxl};
  height: 100vh;
  width: 100%;

  @media (min-width: 1024px),
    (min-device-width: 1024px) and (orientation: portrait) {
    padding: ${({ theme }) => theme.spacing.xxxl} 0;
    width: 52%;
    overflow-y: auto;
  }
`;
