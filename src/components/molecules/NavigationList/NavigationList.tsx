import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { Box, Indicator, Link, List, ListItem, Typography } from "@atoms";

import { NavigationListContainer } from "./NavigationList.styles.";

export const NavigationList: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();
  const theme = useTheme();
  const { spacing, transition } = theme;

  const isBigScreen = useMediaQuery({ query: "(min-width: 1440px)" });

  const [selectedItem, setSelectedItem] = useState<number>(0);
  const isManualScroll = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const menuItems = useMemo(
    () => [
      { href: "#about", label: t("ABOUT") },
      { href: "#experience", label: t("EXPERIENCE") },
      { href: "#projects", label: t("PROJECTS") },
      { href: "#contact", label: t("CONTACT") },
    ],
    [t]
  );

  /**
   * Handles click events for navigation items.
   * Smooth scrolls to the section and disables observer temporarily.
   */
  const handleItemClick = useCallback((href: string, index: number) => {
    setSelectedItem(index);
    isManualScroll.current = true;

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  }, []);

  /**
   * Sets up an Intersection Observer to detect which section is currently in view.
   */
  useEffect(() => {
    const dynamicThreshold = isBigScreen ? 0.5 : 0.3;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;

        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = menuItems.findIndex(
              (item) => item.href === `#${entry.target.id}`
            );
            if (index !== -1 && index !== selectedItem) {
              setSelectedItem(index);
            }
          }
        }
      },
      {
        root: null,
        threshold: dynamicThreshold,
        rootMargin: "-30% 0px 0px 0px",
      }
    );

    const sectionElements = menuItems
      .map(({ href }) => document.querySelector(href))
      .filter((el): el is Element => el !== null);

    sectionElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [menuItems, selectedItem, isBigScreen]);

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
                selectedItem === index
                  ? theme.color.textPrimary
                  : theme.color.textSecondary
              }
              hoverWeight={selectedItem === index ? theme.fontWeight.bold : ""}
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
