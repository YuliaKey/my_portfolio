import styled from "styled-components";

export type ProjectCardOverlayType = {
  hovered?: boolean;
};

export const ProjectCardOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => !["hovered"].includes(prop),
})<ProjectCardOverlayType>`
  position: absolute;
  display: none;
  top: -1rem;
  bottom: -1rem;
  left: -1rem;
  right: -1rem;
  z-index: 0;
  border-radius: 0.375rem;
  transition: ${({ theme }) => theme.transition.smooth};
  background-color: ${({ hovered, theme }) =>
    hovered ? theme.backgroundQuaternary : ""};
  box-shadow: ${({ hovered, theme }) => (hovered ? theme.shadow.sm : "")};

  @media (min-width: 1024px) {
    display: block;
    left: -1.5rem;
    right: -1.5rem;
  }
`;
