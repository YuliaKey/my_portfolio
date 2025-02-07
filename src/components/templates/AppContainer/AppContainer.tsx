import { useMediaQuery } from "react-responsive";

import { Header, MainContent } from "@organisms";
import { Box } from "@atoms";
import { SpotlightContainer, SpotlightEffect } from "./AppContainer.styles";
import { useState } from "react";

export const AppContainer: React.FC = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const scrollX = window.scrollX || 0;
    const scrollY = window.scrollY || 0;

    setPosition({
      x: e.clientX + scrollX,
      y: e.clientY + scrollY,
    });
  };

  return (
    <SpotlightContainer onMouseMove={handleMouseMove}>
      <SpotlightEffect x={position.x} y={position.y} />
      <Box
        maxWidth="1280px"
        minHeight="100vh"
        margin="0 auto"
        padding={
          isBigScreen
            ? "0rem 3rem"
            : isMediumScreen
            ? "4rem 3rem"
            : "3rem 1.5rem"
        }
        height={isBigScreen ? "100vh" : "auto"}
      >
        <Box
          display={isBigScreen ? "flex" : "block"}
          justifyContent={isBigScreen ? "space-between" : ""}
          gap={isBigScreen ? "1rem" : ""}
          flexDirection={isBigScreen ? "row" : ""}
        >
          <Header />
          <MainContent>Main content</MainContent>
        </Box>
      </Box>
    </SpotlightContainer>
  );
};
