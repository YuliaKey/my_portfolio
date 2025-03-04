import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { Box, Link, Typography } from "@atoms";
import {
  NavigationList,
  SocialLinksList,
  ThemeToggle,
  LanguageToggle,
} from "@molecules";

import { HeaderContainer } from "./Header.styles";
import { useMediaQuery } from "react-responsive";

export const Header: React.FC = () => {
  const { fontSize, fontWeight, lineHeight, letterSpacing, color, spacing } =
    useTheme();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });

  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <HeaderContainer>
      <Box>
        <Link href="/" color={color.textPrimary}>
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
          color={color.textSecondary}
          fontWeight={fontWeight.regular}
          opacity="0.8"
        >
          {t("SHORT_DESCRIPTION")}
        </Typography>
        {isSmallScreen ? (
          <Box
            display="flex"
            flexDirection="raw"
            gap={spacing.sm}
            justifyContent="space-between"
            alignItems="center"
          >
            <SocialLinksList />
            <Box
              display="flex"
              flexDirection="row"
              gap={spacing.sm}
              alignItems="center"
              justifyContent="flex-start"
              margin={`${spacing.lg} 0 0 0`}
            >
              <ThemeToggle />
              <LanguageToggle />
            </Box>
          </Box>
        ) : (
          <SocialLinksList />
        )}
        <NavigationList />
      </Box>
      {!isSmallScreen && (
        <Box
          display="flex"
          flexDirection="row"
          gap={spacing.sm}
          alignItems="center"
          justifyContent="flex-start"
          margin={`${spacing.lg} 0 0 0`}
        >
          <ThemeToggle />
          <LanguageToggle />
        </Box>
      )}
    </HeaderContainer>
  );
};
