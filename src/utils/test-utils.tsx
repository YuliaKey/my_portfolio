import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "@styles";

export const renderWithTheme = (ui: React.ReactElement, theme = lightTheme) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

export const hexToRgba = (hex: string) => {
  const hexCode = hex.replace("#", "");
  const r = parseInt(hexCode.substring(0, 2), 16);
  const g = parseInt(hexCode.substring(2, 4), 16);
  const b = parseInt(hexCode.substring(4, 6), 16);
  const a =
    hexCode.length === 8
      ? Math.round((parseInt(hexCode.substring(6, 8), 16) / 255) * 1000) / 1000
      : 1;

  return a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`;
};
