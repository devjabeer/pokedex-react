import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Stack,
  Divider,
  IconButton,
  Icon,
  CardActions,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { titleCase } from "../utilities";
import FavButton from "./FavButton";
import TypeChip from "./TypeChip";

function PokemonCard({ name, img, id, types, fav, save }) {
  const navigate = useNavigate();
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card sx={{ maxWidth: 345 }}>
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
            <Typography
              sx={{ pl: 1 }}
              variant="h6"
              fontWeight="600"
              component="div"
            >
              {titleCase(name)}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group
            </Typography> */}
          </CardContent>
        </CardActionArea>

        <CardActions disableSpacing>
          <Stack direction="row" spacing={1}>
            {types.map((e) => {
              return <TypeChip key={e} type={e} />;
            })}
          </Stack>
          <Box style={{ marginLeft: "auto", padding: "0" }}>
            <FavButton click={() => save(id)} fav={fav} />
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PokemonCard;
