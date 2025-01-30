import React from "react";

import { About, Experience } from "@molecules";
import { ContentSectionContainer } from "./MainContent.styles";

type MainContentType = {
  children: React.ReactNode;
};

export const MainContent: React.FC<MainContentType> = () => {
  return (
    <ContentSectionContainer>
      <About />
      <Experience />
    </ContentSectionContainer>
  );
};
