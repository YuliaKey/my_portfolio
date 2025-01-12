import React from "react";

export type ListItemType = {
  children: React.ReactNode;
};

const ListItem: React.FC<ListItemType> = ({ children }) => {
  return <li>{children}</li>;
};

export default ListItem;
