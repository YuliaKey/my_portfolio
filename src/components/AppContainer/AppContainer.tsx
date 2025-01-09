import { useTranslation } from "react-i18next";

import TitleSection from "../TitleSection/TitleSection";
import ContentSection from "../ContentSection/ContentSection";
import { Container } from "./AppContainer.styles";
import Sidebar from "../Sidebar/Sidebar";

const AppContainer: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();

  // TODO add description key + main content
  return (
    <Container>
      <TitleSection
        title={t("MY_NAME")}
        description="A short description about me."
      >
        <Sidebar />
      </TitleSection>
      <ContentSection>Main content</ContentSection>
    </Container>
  );
};

export default AppContainer;
