import { useTranslation } from "react-i18next";

import { Project } from "src/types/project";

export const useProjectData = (): Project[] => {
  const { t } = useTranslation();

  const projects = t("PROJECTS_LIST", {
    returnObjects: true,
    defaultValue: [],
  }) as Omit<Project, "IMAGE_SRC" | "PROJECT_LINK">[];

  const imagePaths = [
    "/assets/city-guide-project.jpeg",
    "/assets/twitter-project.jpeg",
    "/assets/quori-project.jpeg",
  ];
  const projectLinks = [
    "https://github.com/YuliaKey/city_guide",
    "https://github.com/YuliaKey/twitter_node",
    "https://github.com/YuliaKey/quori",
  ];

  return projects.map((project, index) => ({
    ...project,
    IMAGE_SRC: imagePaths[index] || "",
    PROJECT_LINK: projectLinks[index] || "",
  }));
};
