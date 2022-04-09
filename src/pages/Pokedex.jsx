import { CircularProgress, Grid, Box } from "@mui/material";
import PokemonCard from "../components/PokemonCard";
import useGetPokemonData from "../hooks/useGetPokemonData";

function Pokedex() {
  const pokemonData = useGetPokemonData();

  return pokemonData ? (
    <Grid container justifyContent="center" alignContent="center" spacing={2}>
      {pokemonData.map(({ id, name, sprites, types }) => {
        const img = sprites.other.dream_world.front_default
          ? sprites.other.dream_world.front_default
          : sprites.other["official-artwork"].front_default;
        const typeArray = types.map((e) => e.type.name);
        return (
          <PokemonCard
            key={id}
            name={name}
            img={img}
            id={id}
            types={typeArray}
          />
        );
      })}
    </Grid>
  ) : (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}

export default Pokedex;
