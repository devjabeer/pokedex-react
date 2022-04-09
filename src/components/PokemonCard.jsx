import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Stack,
  Divider,
} from "@mui/material";
import { titleCase } from "../utilities";
import TypeChip from "./TypeChip";

function PokemonCard({ name, img, id, types }) {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => console.log("card cliked")}>
          <Typography
            variant="overline"
            position="absolute"
            ml={2}
            component="span"
          >
            {"#" + id}
          </Typography>
          <CardMedia children height="200">
            <img src={img} width="100%" height="200" alt={name} />
          </CardMedia>
          <Divider variant="middle" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              fontWeight="600"
              component="div"
            >
              {titleCase(name)}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group
            </Typography> */}
            <Stack direction="row" spacing={1}>
              {types.map((e) => {
                return <TypeChip key={e} type={e} />;
              })}
            </Stack>
          </CardContent>
        </CardActionArea>
        {/* 
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
}

export default PokemonCard;
