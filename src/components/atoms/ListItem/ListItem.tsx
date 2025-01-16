import React from "react";

export type ListItemType = {
  children: React.ReactNode;
};

export const ListItem: React.FC<ListItemType> = ({ children }) => {
  return <li>{children}</li>;
};
