import { CardContent, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import TypeChip from "../TypeChip";
import BaseCard from "./BaseCard";

function MoveCard({ moves }) {
  return (
    <BaseCard>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Moves - {moves.count}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1 }} variant="body2">
          {moves.moves}
        </Typography>
      </CardContent>
    </BaseCard>
  );
}

export default MoveCard;
