import styled from "styled-components";

export const StyledArrowRight = styled.svg`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-left: 0.25rem;
  flex-shrink: 0;
  vertical-align: middle;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &.hovered {
    transform: translateX(0.5rem);
  }

  /* Motion reduction (if user prefers reduced motion) */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
