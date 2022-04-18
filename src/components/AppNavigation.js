import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  CssBaseline,
  Icon,
  IconButton,
  Box,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import React from "react";
import { ColorModeContext } from "..";
import { useTheme } from "@emotion/react";
// const buttons = [{ text: "Favourite", path: "/favourite" }];

function AppNavigation() {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();

  const navigate = useNavigate();
  const clickHandler = (path) => {
    navigate(path);
  };
  return (
    <>
      <AppBar position="sticky">
        <CssBaseline />
        <Container style={{ px: 0 }}>
          <Toolbar children>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                cursor: "pointer",
              }}
              onClick={() => clickHandler("/")}
            >
              <Icon style={{}}>catching_pokemon</Icon> <span>Pokedex</span>
            </Typography>
            <IconButton
              onClick={() => clickHandler("/favorite")}
              sx={{ color: "red" }}
            >
              <Icon>favorite</Icon>
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              sx={{ color: "yellow" }}
              onClick={colorMode.toggleColorMode}
            >
              {theme.palette.mode === "light" ? (
                <Icon>dark_mode</Icon>
              ) : (
                <Icon>light_mode</Icon>
              )}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default AppNavigation;
