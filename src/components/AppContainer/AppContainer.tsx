import { useTranslation } from "react-i18next";

import Header from "../Header/Header";
import ContentSection from "../ContentSection/ContentSection";
import { Container } from "./AppContainer.styles";
import NavigationList from "../NavigationList/NavigationList";

const AppContainer: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();

  // TODO main content
  return (
    <Container>
      <Header
        title={t("MY_NAME")}
        subtitle={t("WEB_DEVELOPER")}
        description={t("SHORT_DESCRIPTION")}
      >
        <NavigationList />
      </Header>
      <ContentSection>Main content</ContentSection>
    </Container>
  );
};

export default AppContainer;
