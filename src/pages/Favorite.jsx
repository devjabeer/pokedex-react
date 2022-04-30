import { Alert, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Delayed from "../components/Delayed";
import Loading from "../components/Loading";
import PokemonCard from "../components/PokemonCard";
import useSave from "../hooks/useSave";
import { fetchFavPokemon } from "../store/favSlice";

function Favorite() {
  const { fav, save } = useSave();
  const dispatch = useDispatch();
  const {
    pokemon: pokemonData,
    loading,
    error,
  } = useSelector((state) => state.favorite);
  useEffect(() => {
    if (fav !== null) dispatch(fetchFavPokemon(fav));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fav]);

  return loading ? (
    <Loading />
  ) : error ? (
    <h5>{error}</h5>
  ) : pokemonData.length > 0 ? (
    <Grid container justifyContent="center" alignContent="center" spacing={2}>
      {[...pokemonData]
        .sort((a, b) => +a.id - +b.id)
        .map(({ id, name, sprites, types }) => {
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
              fav={fav?.includes(id)}
              save={save}
            />
          );
        })}
    </Grid>
  ) : (
    // This was added so that it does not flicker while getting pokemon data.
    <Delayed>
      <Alert severity="info" variant="outlined">
        Your Favorite section is empty! Click on heart icon on pokemon card to
        add it to the favorite. Please note that favorite are saved on your
        local storage.
      </Alert>
    </Delayed>
  );
}

export default Favorite;
