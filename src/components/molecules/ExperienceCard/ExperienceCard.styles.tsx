import styled from "styled-components";

export type ExperienceCardOverlayType = {
  hovered?: boolean;
};

export const ExperienceCardOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => !["hovered"].includes(prop),
})<ExperienceCardOverlayType>`
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
    hovered ? theme.color.backgroundQuaternary : ""};
  box-shadow: ${({ hovered, theme }) => (hovered ? theme.shadow.sm : "")};

  @media (min-width: 1024px) {
    display: block;
    left: -1.5rem;
    right: -1.5rem;
  }
`;
