import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "@styles";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storedTheme = localStorage.getItem("theme") as ThemeMode | null;
  const [theme, setTheme] = useState<ThemeMode>(storedTheme || ThemeMode.DARK);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === ThemeMode.LIGHT ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
