import "react-i18next";

import { Experience } from "src/types/experience";
import { Project } from "src/types/project";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      ABOUT_PARAGRAPHS: string[];
      EXPERIENCES: Experience[];
      PROJECTS_LIST: Project[];
    };
  }
}
