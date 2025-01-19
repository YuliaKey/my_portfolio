import React from "react";
import { useTheme } from "styled-components";

import { GitHub, LinkedIn, LinkIcon, List, ListItem } from "@atoms";

export const SocialLinksList: React.FC = () => {
  const theme = useTheme();
  const socialLinks = [
    {
      href: "https://github.com/YuliiaKey",
      label: "GitHub",
      Icon: GitHub,
    },
    {
      href: "https://www.linkedin.com/in/yuliia-kolomiiets-bb0a62263/",
      label: "LinkedIn",
      Icon: LinkedIn,
    },
  ];

  return (
    <List
      aria-label="Social media"
      display="flex"
      align-items="center"
      gap={theme.spacing.sm}
      margin={`${theme.spacing.lg} 0 0 ${theme.spacing.xxxs}`}
    >
      {socialLinks.map(({ href, label, Icon }, index) => (
        <ListItem key={`social-item-${label}-${index}`}>
          <LinkIcon
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            title={label}
          >
            <span className="sr-only" aria-hidden>
              {label}
            </span>
            <Icon />
          </LinkIcon>
        </ListItem>
      ))}
    </List>
  );
};
