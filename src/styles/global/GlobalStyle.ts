import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--font-inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: "ss03", "cv02", "cv11";
    scroll-behavior: smooth;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  ::selection {
    background: ${(props) => props.theme.backgroundTertiary}; 
    color: ${(props) => props.theme.textSelected}; 
  }

  /* For cross-browser support */
  ::-moz-selection {
    background: ${(props) => props.theme.textPrimary};
    color: ${(props) => props.theme.backgroundPrimary};
  }

  body {
    background-color: ${(props) => props.theme.backgroundPrimary};
    color: ${(props) => props.theme.textPrimary};
    -webkit-font-smoothing: antialiased;
  }
`;
