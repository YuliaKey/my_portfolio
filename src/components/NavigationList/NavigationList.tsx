import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import Link from "../atoms/Link/Link";
import List from "../atoms/List/List";
import Box from "../atoms/Box/Box";
import Typography from "../atoms/Typography/Typography";
import ListItem from "../atoms/ListItem/ListItem";
import Indicator from "../atoms/Indicator/Indicator";
import { NavigationListContainer } from "./NavigationList.styles.";

const NavigationList: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();
  const theme = useTheme();
  const { spacing, transition } = theme;

  const [selectedItem, setSelectedItem] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
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
              onClick={() => handleItemClick(index)}
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
                <Indicator selected={selectedItem === index} />
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

export default NavigationList;
