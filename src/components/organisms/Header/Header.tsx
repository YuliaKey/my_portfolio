import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { Box, Link, Typography } from "@atoms";

import { HeaderContainer } from "./Header.styles";
import { NavigationList, SocialLinksList } from "@molecules";

export const Header: React.FC = () => {
  const {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textSecondary,
    textPrimary,
    spacing,
  } = useTheme();

  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <HeaderContainer>
      <Box>
        <Link href="/" color={textPrimary}>
          <Typography
            as="h1"
            fontSize={fontSize.h1}
            fontWeight={fontWeight.bold}
            lineHeight={lineHeight.xs}
            letterSpacing={letterSpacing.xxs}
          >
            {t("MY_NAME")}
          </Typography>
        </Link>
        <Typography
          as="h2"
          fontSize={fontSize.h2}
          fontWeight={fontWeight.regular}
          lineHeight={lineHeight.lg}
          letterSpacing={letterSpacing.xs}
          margin={`${spacing.xs} 0 0 0`}
        >
          {t("WEB_DEVELOPER")}
        </Typography>
        <Typography
          maxWidth="20rem"
          margin={`${spacing.xs} 0 0 0`}
          fontSize={fontSize.body}
          lineHeight={lineHeight.md}
          letterSpacing={letterSpacing.xxs}
          color={textSecondary}
          fontWeight={fontWeight.regular}
          opacity="0.8"
        >
          {t("SHORT_DESCRIPTION")}
        </Typography>
        <NavigationList />
      </Box>
      <SocialLinksList />
    </HeaderContainer>
  );
};
