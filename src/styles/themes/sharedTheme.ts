import { Theme } from "./theme";

export const sharedTheme: Omit<
  Theme,
  "backgroundSecondary" | "backgroundPrimary" | "textPrimary" | "textSecondary"
> = {
  fontSize: {
    h1: "3rem",
    h2: "1.25rem",
    h3: "1.5rem",
    body: "1rem",
    small: "0.75rem",
  },
  fontWeight: {
    bold: 600,
    semiBold: 500,
    regular: 400,
  },
  lineHeight: {
    xs: "1",
    sm: "1.25",
    md: "1.5",
    lg: "1.75",
  },
  letterSpacing: {
    xxs: "0.01rem",
    xs: "0.04rem",
    sm: "0.095rem",
    md: "0.15rem",
    lg: "0.25rem",
    xl: "0.30rem",
  },
  spacing: {
    xxxs: "0.25rem",
    xxs: "0.5rem",
    xs: "0.75rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "4rem",
    xxxl: "6rem",
  },
  transition: {
    default: "color 0.3s",
    fast: "color 0.15s",
    slow: "color 0.5s ease-out",
    all: "all 0.15s",
    easeInOut: "ease-in-out 0.2s",
  },
};
