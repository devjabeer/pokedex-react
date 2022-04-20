import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Stack,
  Divider,
  CardHeader,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { titleCase } from "../utilities";
import FavButton from "./FavButton";
import TypeChip from "./TypeChip";

function PokemonCard({ name, img, id, types, fav, save }) {
  const navigate = useNavigate();
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={titleCase(name)}
          sx={{ py: 1, fontSize: 9 }}
          action={<FavButton click={() => save(id)} fav={fav} />}
        />
        <Divider />
        <CardActionArea onClick={() => navigate(`/pokemon/${id}`)}>
          <Typography
            variant="overline"
            position="absolute"
            ml={2}
            component="span"
          >
            {"#" + id}
          </Typography>
          <CardMedia children height="200">
            <img
              src={img}
              width="100%"
              height="200"
              alt={name}
              loading="lazy"
            />
          </CardMedia>
          <Divider variant="middle" />
          <CardContent>
            <Stack direction="row" spacing={1}>
              {types.map((e) => {
                return <TypeChip key={e} type={e} />;
              })}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default PokemonCard;
