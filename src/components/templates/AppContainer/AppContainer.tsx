import { useMediaQuery } from "react-responsive";

import { Header, MainContent } from "@organisms";
import { Box } from "@atoms";
import { SpotlightContainer, SpotlightEffect } from "./AppContainer.styles";
import { useState } from "react";

export const AppContainer: React.FC = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  // TODO main content
  return (
    <SpotlightContainer onMouseMove={handleMouseMove}>
      <SpotlightEffect x={position.x} y={position.y} />
      <Box
        display={isBigScreen ? "flex" : "block"}
        justifyContent={isBigScreen ? "space-between" : ""}
        gap={isBigScreen ? "1rem" : ""}
        maxWidth="1200px"
        minHeight="100vh"
        margin="0 auto"
        flexDirection={isBigScreen ? "row" : ""}
        padding={isBigScreen ? "0rem 3rem" : "3rem 1.5rem"}
        height={isBigScreen ? "100vh" : "auto"}
      >
        <Header />
        <MainContent>Main content</MainContent>
      </Box>
    </SpotlightContainer>
  );
};
