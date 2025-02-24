import { useTranslation } from "react-i18next";

import { SectionContainer, ContactForm } from "@molecules";

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer
      id="contact"
      ariaLabel="Contact me"
      title={t("CONTACT") as string}
      className="sr-only"
    >
      <ContactForm />
    </SectionContainer>
  );
};
