import { Icon, IconButton } from "@mui/material";
import React from "react";

function FavButton({ click, fav = false }) {
  return (
    <IconButton
      onClick={click}
      sx={fav ? { color: "red" } : { color: "inherit" }}
    >
      <Icon>favorite</Icon>
    </IconButton>
  );
}

export default FavButton;
