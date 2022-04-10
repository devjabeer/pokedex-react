import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Loading() {
  return (
    <Box mt={3} style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}

export default Loading;
