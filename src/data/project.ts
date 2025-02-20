import { useTranslation } from "react-i18next";

import { Project } from "src/types/project";

export const useProjectData = (): Project[] => {
  const { t } = useTranslation();

  const projects = t("PROJECTS_LIST", {
    returnObjects: true,
    defaultValue: [],
  }) as Omit<Project, "IMAGE_SRC">[];

  const imagePaths = ["/assets/portfolio-4.jpeg", "/assets/portfolio-6.jpeg"];

  return projects.map((project, index) => ({
    ...project,
    IMAGE_SRC: imagePaths[index] || "",
  }));
};
