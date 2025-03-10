import styled from "styled-components";

export type StyledProjectImageProps = {
  hovered?: boolean;
};

export const StyledProjectImage = styled.img.withConfig({
  shouldForwardProp: (prop) => !["hovered"].includes(prop),
})<StyledProjectImageProps>`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.25rem;
  border-width: 2px;
  transition: ${({ theme }) => theme.transition.smooth};
  aspect-ratio: 16 / 9;
  border-color: ${({ hovered, theme }) =>
    hovered ? theme.color.textPrimary30 : theme.color.textPrimary10};

  @media (min-width: 640px) {
    grid-column: span 2 / span 2;
    order: 1;
    transform: translateY(-0.25rem);
  }

  .hovered & {
    border-color: ${({ theme }) => theme.color.textPrimary};
  }
`;
