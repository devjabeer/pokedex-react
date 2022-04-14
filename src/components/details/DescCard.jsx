import {
  Button,
  CardActions,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BaseDialog from "../BaseDialog";
import TypeChip from "../TypeChip";
import BaseCard from "./BaseCard";

function DescCard({ name, species, flavorText, desc, types }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = async (url, title) => {
    setOpen(true);
  };
  return (
    <BaseCard>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
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
          {flavorText[0].text}
        </Typography>
        <Typography variant="body2">{desc}</Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button fullWidth onClick={handleClick} variant="outlined">
          view All Entries
        </Button>
      </CardActions>
      <BaseDialog
        open={open}
        handleClose={handleClose}
        content={{ title: `Flavor Text Entries - ${flavorText.length}` }}
      >
        <List dense>
          {flavorText.map((e) => {
            return (
              <React.Fragment key={e.version}>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{ fontWeight: "bold" }}
                    primary={e.version}
                    secondary={e.text}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
        </List>
      </BaseDialog>
    </BaseCard>
  );
}

export default DescCard;
