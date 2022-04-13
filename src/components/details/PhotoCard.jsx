import { Card, CardMedia } from "@mui/material";
import React from "react";
import BaseCard from "./BaseCard";

function PhotoCard({ src }) {
  return (
    <BaseCard>
      <CardMedia children height="200">
        <img
          src={src}
          width="100%"
          height="100%"
          alt="Fetching issues..."
          loading="lazy"
        />
      </CardMedia>
    </BaseCard>
  );
}

export default PhotoCard;
