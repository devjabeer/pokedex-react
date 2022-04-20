import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createTheme } from "@mui/material";
// Root element as per new React 18
const root = createRoot(document.getElementById("root"));
// Context for theme toggle
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});
// Main react element
const RootElement = () => {
  const [mode, setMode] = React.useState("dark");
  // Theme setup as per MUI
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </ColorModeContext.Provider>
        </BrowserRouter>
      </Provider>
    </>
  );
};

root.render(<RootElement />);
