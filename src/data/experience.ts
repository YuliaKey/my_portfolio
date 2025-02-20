import { useTranslation } from "react-i18next";

import { Experience } from "src/types/experience";

export const useExperienceData = (): Experience[] => {
  const { t } = useTranslation();

  return t("EXPERIENCES", {
    returnObjects: true,
    defaultValue: [],
  }) as Experience[];
};
