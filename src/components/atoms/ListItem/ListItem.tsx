import React from "react";

import { StyledListItem } from "./ListItem.styles";

export type ListItemType = {
  children: React.ReactNode;
};

export const ListItem: React.FC<ListItemType> = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};
