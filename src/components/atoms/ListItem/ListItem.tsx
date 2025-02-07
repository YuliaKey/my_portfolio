import React from "react";

import { StyledListItem, StyledListItemType } from "./ListItem.styles";

export type ListItemType = {
  children: React.ReactNode;
} & StyledListItemType;

export const ListItem: React.FC<ListItemType> = ({
  children,
  margin,
  padding,
}) => {
  return (
    <StyledListItem margin={margin} padding={padding}>
      {children}
    </StyledListItem>
  );
};
