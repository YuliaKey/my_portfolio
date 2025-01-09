import { ThemeProvider } from "styled-components";

import { darkTheme, GlobalStyle, lightTheme } from "./styles/theme";
import AppContainer from "./components/AppContainer/AppContainer";

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
