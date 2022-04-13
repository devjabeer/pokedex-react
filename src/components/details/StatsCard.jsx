import React from "react";
import {
  CardContent,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import BaseCard from "./BaseCard";
import { Box } from "@mui/system";

function StatsCard({ title, stats }) {
  return (
    <BaseCard>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Divider />
        <List dense>
          {stats.map((e) => {
            return (
              <ListItem key={e[0]} disableGutters>
                <ListItemText primary={e[0]} />
                <ListItemSecondaryAction>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 14, mr: 1 }}
                      color="text.secondary"
                    >
                      {e[1]}
                    </Typography>
                    <Tooltip title={e[2]} arrow>
                      <Icon sx={{ fontSize: 14 }}>help_outline</Icon>
                    </Tooltip>
                  </Box>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </BaseCard>
  );
}

export default StatsCard;
