import React from "react";

import { ContentSectionContainer } from "./MainContent.styles";

type MainContentType = {
  children: React.ReactNode;
};

export const MainContent: React.FC<MainContentType> = ({ children }) => {
  return <ContentSectionContainer>{children}</ContentSectionContainer>;
};
