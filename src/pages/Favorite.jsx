import { Grid } from "@mui/material";
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
    <Delayed>
      <h4>Click Heart Icon on Pokemon Cards to add it to favorite</h4>
    </Delayed>
  );
}

export default Favorite;
