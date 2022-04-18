import { Alert, Box, Container, Typography } from "@mui/material";
import React from "react";

function Error404({ text = "Resource not found!" }) {
  return (
    <Alert variant="outlined" severity="error">
      {text}
    </Alert>
  );
}

export default Error404;
