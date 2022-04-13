import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  Icon,
} from "@mui/material";
import { Box } from "@mui/system";
import { Outlet, useNavigate } from "react-router-dom";

const buttons = [
  { text: "Home", path: "/" },
  { text: "Favourite", path: "/favourite" },
];

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
              }}
            >
              <Icon style={{}}>catching_pokemon</Icon> <span>Pokedex</span>
            </Typography>
            {buttons.map((b) => (
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
            ))}
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
