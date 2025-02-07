import styled from "styled-components";

export const StyledArrow = styled.svg`
  display: inline-block;
  flex-shrink: 0;
  height: 1.2rem;
  width: 1.2rem;
  margin-left: 0.25rem;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  vertical-align: middle;

  &.hovered {
    transform: translate(0.25rem, -0.25rem);
  }
`;
