import { useTranslation } from "react-i18next";

import { Experience } from "src/types/experience";

export const useExperienceData = (): Experience[] => {
  const { t } = useTranslation();

  const experiences = t("EXPERIENCES", {
    returnObjects: true,
    defaultValue: [],
  }) as Omit<Experience, "COMPANY_LINK">[];

  const companyLinks = ["https://www.cma-cgm.com/"];

  return experiences.map((experience, index) => ({
    ...experience,
    COMPANY_LINK: companyLinks[index] || "",
  }));
};
