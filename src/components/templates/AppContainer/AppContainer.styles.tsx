import styled from "styled-components";

export type SpotlightProps = {
  size?: string;
  color?: string;
  intensity?: string;
  x: number;
  y: number;
};

export const SpotlightContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const SpotlightEffect = styled.div
  .withConfig({
    shouldForwardProp: (prop) =>
      !["size", "color", "intensity", "x", "y"].includes(prop),
  })
  .attrs<SpotlightProps>((props) => ({
    style: {
      background: `radial-gradient(
        ${props.size || "600px"} at ${props.x}px ${props.y}px,
        ${props.color || "rgba(29, 78, 216, 0.15)"},
        transparent ${props.intensity || "80%"}
      )`,
    },
  }))<SpotlightProps>`
  pointer-events: none;
  inset: 0;
  transition-duration: .3s;

  @media(min-width: 1024px) {
    position: absolute;
  }
`;
