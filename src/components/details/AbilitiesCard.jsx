import {
  CardContent,
  Divider,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { titleCase } from "../../utilities";
import BaseDialog from "../BaseDialog";
import BaseCard from "./BaseCard";
import { getAbility } from "../../services/api";

function AbilitiesCard({ abilities }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({});
  // Cache api data
  const [apiData, setApiData] = useState({});
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setContent({});
    }, 100);
  };
  const handleClick = async (url, title) => {
    setOpen(true);
    const { effect } = await getContent(url);
    setContent({ title, desc: effect });
  };
  const getContent = async (url) => {
    // if already in cache
    if (apiData[url]) return apiData[url];
    const data = await getAbility(url);
    setApiData({ ...apiData, [url]: data });
    return data;
  };
  return (
    <BaseCard>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Abilities
        </Typography>
        <Divider />
        <List>
          {abilities.map((e) => {
            return (
              <ListItem key={e.name} disableGutters>
                <ListItemText primary={titleCase(e.name)} />
                {e.isHidden && <ListItemText secondary="- Hidden" />}
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => handleClick(e.url, titleCase(e.name))}
                  >
                    <Icon sx={{ fontSize: 18 }}>comment</Icon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
      <BaseDialog
        open={open}
        handleClose={handleClose}
        content={content}
        titlePrefix="Ability: "
      />
    </BaseCard>
  );
}

export default AbilitiesCard;
