import { ThemeProvider } from "styled-components";

import { AppContainer } from "@templates";
import { darkTheme, lightTheme, GlobalStyle } from "@styles";

function App() {
  //TODO replace with state management later
  const isDarkMode = true;

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <AppContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
