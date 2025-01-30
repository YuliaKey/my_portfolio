import styled from "styled-components";

export const AboutContainer = styled.section`
  scroll-margin-top: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media (min-width: 1024px) {
    margin-bottom: 9rem;
    scroll-margin-top: ${({ theme }) => theme.spacing.xxxl};
  }

  @media (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  }
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: rgba(15, 23, 42, 0.75);
  z-index: 20;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
  margin-left: -1.5rem;
  margin-right: -1.5rem;

  @media (min-width: 1024px) {
    position: relative;
    top: auto;
    opacity: 0;
    padding: 0;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    &.sr-only {
      height: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  }

  @media (min-width: 768px) {
    padding: 0 3rem;
    margin: 0 -3rem;
  }
`;
