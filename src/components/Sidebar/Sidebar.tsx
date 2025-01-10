import React from "react";
import { useTranslation } from "react-i18next";

import { SidebarContainer } from "./Sidebar.styles";

const Sidebar: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <SidebarContainer>
      <div>{t("ABOUT")}</div>
      <div>{t("EXPERIENCE")}</div>
      <div>{t("PROJECTS")}</div>
      <div>{t("CONTACT")}</div>
    </SidebarContainer>
  );
};

export default Sidebar;
