import { useTranslation } from "react-i18next";

import { Container } from "./AppContainer.styles";
import { Header, MainContent, NavigationList } from "@components";

export const AppContainer: React.FC = () => {
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
      <MainContent>Main content</MainContent>
    </Container>
  );
};
