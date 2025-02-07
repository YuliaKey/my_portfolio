import "react-i18next";

import { Experience } from "src/types/experience";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      EXPERIENCES: Experience[];
      ABOUT_PARAGRAPHS: string[];
    };
  }
}
