import { AppContainer } from "@templates";
import { GlobalStyle } from "@styles";

import { AppThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <AppContainer />
    </AppThemeProvider>
  );
}

export default App;
