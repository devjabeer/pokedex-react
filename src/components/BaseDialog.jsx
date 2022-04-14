import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import Loading from "./Loading";

function BaseDialog({
  open,
  handleClose,
  content = {},
  titlePrefix = "",
  children,
}) {
  return (
    <Dialog
      maxWidth="xs"
      open={open}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle>
        <Typography sx={{ fontWeight: "bold" }}>
          {titlePrefix}
          {content.title}
        </Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
        {children ? (
          children
        ) : content.desc ? (
          <DialogContentText>{content.desc}</DialogContentText>
        ) : (
          <Loading />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default BaseDialog;
