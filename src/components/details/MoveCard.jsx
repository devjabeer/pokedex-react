import {
  Button,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BaseDialog from "../BaseDialog";
import BaseCard from "./BaseCard";

function MoveCard({ moves }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <BaseCard>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Moves - {moves.count}
        </Typography>
        <Divider sx={{ mb: 1 }} />
        {/* <Typography sx={{ mt: 1 }} variant="body2">
          {moves.moves}
        </Typography> */}
        {moves.moves.slice(0, 20).map((e) => {
          return (
            <Chip
              size="small"
              style={{ margin: "2px" }}
              key={e}
              label={e}
              variant="outlined"
            />
          );
        })}
      </CardContent>
      <Divider />
      <CardActions>
        <Button fullWidth onClick={handleClick} variant="outlined">
          view All Moves
        </Button>
      </CardActions>
      <BaseDialog
        open={open}
        handleClose={handleClose}
        content={{ title: `All Moves - ${moves.count}` }}
      >
        {moves.moves.map((e) => {
          return (
            <Chip
              size="small"
              style={{ margin: "2px" }}
              key={e}
              label={e}
              variant="outlined"
            />
          );
        })}
      </BaseDialog>
    </BaseCard>
  );
}

export default MoveCard;
