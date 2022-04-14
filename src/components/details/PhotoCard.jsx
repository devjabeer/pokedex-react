import {
  Divider,
  CardMedia,
  Button,
  CardActions,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BaseCard from "./BaseCard";
import BaseDialog from "../BaseDialog";

function PhotoCard({ src, sprites }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = async (url, title) => {
    setOpen(true);
  };
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
      <Divider />
      <CardActions>
        <Button fullWidth onClick={handleClick} variant="outlined">
          view All Sprites
        </Button>
      </CardActions>
      <BaseDialog
        open={open}
        handleClose={handleClose}
        content={{ title: `All Sprites` }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {sprites.map((e, i) => {
            return (
              <Grid key={i} item>
                <CardMedia children sx={{ border: 1, borderColor: "yellow" }}>
                  <img
                    src={e}
                    width="50"
                    height="50"
                    alt="Fetching issues..."
                    loading="lazy"
                  />
                </CardMedia>
              </Grid>
            );
          })}
        </Grid>
      </BaseDialog>
    </BaseCard>
  );
}

export default PhotoCard;