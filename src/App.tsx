import "./App.css";
import ThemeToggler from "./Components/ThemeToggler";

import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler icon={"moon"} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
