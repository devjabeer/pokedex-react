import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import TypeChip from "../TypeChip";
import BaseCard from "./BaseCard";

function DescCard({ name, species, flavorText, desc, types }) {
  return (
    <BaseCard>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {species}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Stack direction="row" spacing={1}>
          {types.map((e) => {
            return <TypeChip key={e} type={e} cursor="" />;
          })}
        </Stack>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {flavorText}
        </Typography>
        <Typography variant="body2">{desc}</Typography>
      </CardContent>
    </BaseCard>
  );
}

export default DescCard;
