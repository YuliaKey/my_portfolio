import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--font-inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${({ theme }) => theme.backgroundPrimary};
    color: ${({ theme }) => theme.textPrimary};
  }
`;
