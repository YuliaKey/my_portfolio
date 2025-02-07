import styled from "styled-components";

export const StyledSectionHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
  margin-top: ${({ theme }) => theme.spacing.xxxs};
  color: ${({ theme }) => theme.textSecondary};
  letter-spacing: ${({ theme }) => theme.letterSpacing.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  text-transform: uppercase;
  opacity: 0.5;
  z-index: 10;

  @media (min-width: 640px) {
    grid-column: span 2 / span 2;
  }
`;
