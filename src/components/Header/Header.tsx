import { useTheme } from "styled-components";

import { HeaderContainer } from "./Header.styles";
import { Typography } from "../atoms/Typography/Typography";

type HeaderType = {
  title: string;
  subtitle: string;
  description: string;
  children?: React.ReactNode;
};

export const Header: React.FC<HeaderType> = ({
  title,
  subtitle,
  description,
  children,
}) => {
  const {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textSecondary,
    spacing,
  } = useTheme();

  return (
    <HeaderContainer>
      <Typography
        as="h1"
        fontSize={fontSize.h1}
        fontWeight={fontWeight.bold}
        lineHeight={lineHeight.xs}
        letterSpacing={letterSpacing.xxs}
      >
        {title}
      </Typography>
      <Typography
        as="h2"
        fontSize={fontSize.h2}
        fontWeight={fontWeight.regular}
        lineHeight={lineHeight.lg}
        letterSpacing={letterSpacing.xs}
        margin={`${spacing.xs} 0 0 0`}
      >
        {subtitle}
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
        {description}
      </Typography>
      {children}
    </HeaderContainer>
  );
};
