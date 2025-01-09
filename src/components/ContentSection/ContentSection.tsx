import React from "react";

import { ContentSectionContainer } from "./ContentSection.styles";

type ContentSectionType = {
  children: React.ReactNode;
};

const ContentSection: React.FC<ContentSectionType> = ({ children }) => {
  return <ContentSectionContainer>{children}</ContentSectionContainer>;
};

export default ContentSection;
