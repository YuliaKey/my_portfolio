import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { Box, Indicator, Link, List, ListItem, Typography } from "@atoms";

import { NavigationListContainer } from "./NavigationList.styles.";

export const NavigationList: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();
  const theme = useTheme();
  const { spacing, transition } = theme;

  const [selectedItem, setSelectedItem] = useState<number>(0);

  const handleItemClick = (href: string, index: number) => {
    setSelectedItem(index);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const menuItems = [
    { href: "#about", label: t("ABOUT") },
    { href: "#experience", label: t("EXPERIENCE") },
    { href: "#projects", label: t("PROJECTS") },
    { href: "#contact", label: t("CONTACT") },
  ];

  return (
    <NavigationListContainer>
      <List width="max-content" margin={`${spacing.xxl} 0 0 0`}>
        {menuItems.map(({ href, label }, index) => (
          <ListItem key={`menu-item-${label}-${index}`}>
            <Link
              href={href}
              transition={transition.fast}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                e.preventDefault();
                handleItemClick(href, index);
              }}
              color={
                selectedItem === index ? theme.textPrimary : theme.textSecondary
              }
              opacity={selectedItem === index ? "1" : "0.5"}
            >
              <Box
                display="flex"
                alignItems="center"
                gap={spacing.xs}
                padding={`${spacing.sm} 0`}
              >
                <Indicator selected={selectedItem === index} aria-hidden />
                <Typography
                  as="span"
                  fontSize={theme.fontSize.small}
                  letterSpacing={theme.letterSpacing.sm}
                  lineHeight={theme.lineHeight.xs}
                  fontWeight={theme.fontWeight.bold}
                >
                  {label}
                </Typography>
              </Box>
            </Link>
          </ListItem>
        ))}
      </List>
    </NavigationListContainer>
  );
};
