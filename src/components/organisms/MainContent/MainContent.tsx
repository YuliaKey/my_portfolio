import React from "react";

import { About, Experience, Projects } from "@organisms";

import { ContentSectionContainer } from "./MainContent.styles";

type MainContentType = {
  children: React.ReactNode;
};

export const MainContent: React.FC<MainContentType> = () => {
  return (
    <ContentSectionContainer>
      <About />
      <Experience />
      <Projects />
    </ContentSectionContainer>
  );
};
