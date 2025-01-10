import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
    background: ${(props) => props.theme.backgroundPrimary};
    color: ${(props) => props.theme.textPrimary};
  }
`;

const sharedTheme = {
  h1: "2.5rem",
  h2: "2rem",
  h3: "1.75rem",
  bodySize: "1rem",
};

export const lightTheme = {
  ...sharedTheme,
  backgroundPrimary: "#ffffff",
  textPrimary: "#333333",
  textSecondary: "#4F4F4F",
};

export const darkTheme = {
  ...sharedTheme,
  backgroundPrimary: "#0b132e",
  focus: "#131E44",
  textPrimary: "#C7CFED",
  textSecondary: "#7E8EB6",
  fontSizes: {
    h1: "2.5rem",
    h2: "2rem",
    h3: "1.75rem",
    body: "1rem",
  },
  fontWeights: {
    bold: 700,
    semiBold: 600,
    regular: 400,
  },
};
