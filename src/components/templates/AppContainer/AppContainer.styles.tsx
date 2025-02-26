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
  overflow: auto;
`;

export const SpotlightEffect = styled.div
  .withConfig({
    shouldForwardProp: (prop) =>
      !["size", "color", "intensity", "x", "y"].includes(prop),
  })
  .attrs<SpotlightProps>((props) => {
    const theme = props.theme;

    return {
      style: {
        background: `radial-gradient(
          ${props.size || "600px"} at ${props.x}px ${props.y}px,
          ${props.color || theme.color.backgroundSecondary}, 
          transparent ${props.intensity || "80%"}
        )`,
      },
    };
  })<SpotlightProps>`
  pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw; 
    height: 100vh; 
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 30;
  
    @media(max-width: 1024px) {
      display: none;
    }
`;
