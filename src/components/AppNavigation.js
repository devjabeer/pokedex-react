import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  CssBaseline,
  Icon,
  IconButton,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

// const buttons = [{ text: "Favourite", path: "/favourite" }];

function AppNavigation() {
  const navigate = useNavigate();
  const clickHandler = (path) => {
    navigate(path);
  };
  return (
    <>
      <AppBar position="sticky">
        <CssBaseline />
        <Container>
          <Toolbar>
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
            {/* {buttons.map((b) => (
              <Button
                key={b.text}
                variant="text"
                color="primary"
                sx={{ ml: 2 }}
                onClick={() => {
                  clickHandler(b.path);
                }}
              >
                {b.text}
              </Button>
            ))} */}
            <IconButton
              onClick={() => clickHandler("/favorite")}
              sx={{ color: "red" }}
            >
              <Icon>favorite</Icon>
            </IconButton>
            {/* <Autocomplete
              size="small"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "flex-end",
                width: "100",
              }}
              width="40"
              freeSolo
              options={["fas"]}
              renderInput={(p) => (
                <TextField {...p} width="30" label="freeSolo" />
              )}
            /> */}
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
