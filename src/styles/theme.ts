import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--font-inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${(props) => props.theme.backgroundPrimary};
    color: ${(props) => props.theme.textPrimary};
  }
`;

export const sharedTheme = {
  fontSize: {
    h1: "3rem",
    h2: "1.25rem",
    h3: "1.75rem",
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
    xxs: "0.5rem",
    xs: "0.75rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },
  transition: {
    default: "color 0.3s",
    fast: "color 0.15s",
    slow: "color 0.5s ease-out",
    all: "all 0.15s",
  },
};

export const lightTheme = {
  ...sharedTheme,
  backgroundPrimary: "#ffffff",
  textPrimary: "#333333",
  textSecondary: "#4F4F4F",
};

export const darkTheme = {
  ...sharedTheme,
  backgroundPrimary: "#0e162a",
  focus: "#131E44",
  textPrimary: "#E2E8F0",
  textSecondary: "#94A3B8",
};
