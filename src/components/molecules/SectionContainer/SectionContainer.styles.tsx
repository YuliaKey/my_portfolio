import styled from "styled-components";

export const SectionWrapper = styled.section`
  scroll-margin-top: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media (min-width: 1024px) {
    position: relative;
    margin-bottom: 9rem;
    scroll-margin-top: ${({ theme }) => theme.spacing.xxxl};
  }
`;

export const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.color.backgroundPrimary75};
  backdrop-filter: blur(8px) brightness(1) contrast(1) grayscale(0)
    hue-rotate(0deg) invert(0) opacity(1) saturate(1) sepia(0);

  /* WebKit support (for Safari) */
  -webkit-backdrop-filter: blur(8px) brightness(1) contrast(1) grayscale(0)
    hue-rotate(0deg) invert(0) opacity(1) saturate(1) sepia(0);

  z-index: 20;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
  margin-left: -1.5rem;
  margin-right: -1.5rem;

  @media (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
    margin-left: -3rem;
    margin-right: -3rem;
  }

  @media (min-width: 1024px) {
    position: relative;
    top: auto;
    opacity: 0;
    padding: 0;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    &.sr-only {
      position: absolute;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  }

  & > * {
    @media (min-width: 1024px) {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  }
`;
