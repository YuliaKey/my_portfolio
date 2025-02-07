import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    display: block;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: "__inter_20b187", "__inter_Fallback_20b187", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-feature-settings: "ss03", "cv02", "cv11";
    scroll-behavior: smooth;
    
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  *, :before, :after {
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
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
    line-height: 1.625;
    margin: 0;
  }
`;
