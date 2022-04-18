import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
//import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createTheme } from "@mui/material";
const root = createRoot(document.getElementById("root"));

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const RootElement = () => {
  const [mode, setMode] = React.useState("dark");
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
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </ColorModeContext.Provider>
        </BrowserRouter>
      </Provider>
    </>
  );
};

root.render(<RootElement />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
