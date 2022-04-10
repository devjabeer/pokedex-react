import { useEffect } from "react";
import { CircularProgress, Grid, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import useGetPokemonData from "../hooks/useGetPokemonData";
import { fetchPokemon } from "../store/pokemonSlice";

function Pokedex() {
  // const pokemonData = useGetPokemonData();
  const dispatch = useDispatch();
  // const { loading, pokemon: pokemonData } = useSelector((state) => state);
  const { pokemon: pokemonData, loading } = useSelector(
    (state) => state.pokemon
  );
  // console.log("loading:" + loading);
  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return loading ? (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
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
  );
}

export default Pokedex;
