import styled from "styled-components";

export const ContentSectionContainer = styled.main`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;

  width: 52%;

  @media (max-width: 1024px),
    (max-device-width: 1024px) and (orientation: portrait) {
    padding-top: ${({ theme }) => theme.spacing.xxxl};
  }
`;
