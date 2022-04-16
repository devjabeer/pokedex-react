import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Error404({ text = "Resource not found!" }) {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Typography variant="h4" textAlign="center">
        {text}
      </Typography>
    </Container>
  );
}

export default Error404;
