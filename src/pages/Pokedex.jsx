import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemon } from "../store/pokemonSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../components/Loading";
import useSave from "../hooks/useSave";

function Pokedex() {
  const { fav, save } = useSave();
  const {
    pokemon: pokemonData,
    loading,
    next,
  } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);
  const fetchMorePokemon = () => {
    dispatch(fetchPokemon(next));
  };
  return pokemonData ? (
    <InfiniteScroll
      dataLength={pokemonData.length}
      next={fetchMorePokemon}
      hasMore={next ? true : false}
      scrollThreshold={0.95}
      style={{ color: "red" }}
    >
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        spacing={{ xs: 1, sm: 2 }}
      >
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
              fav={fav?.includes(id)}
              save={save}
            />
          );
        })}
      </Grid>
      {loading && <Loading />}
    </InfiniteScroll>
  ) : (
    <Loading />
  );
}

export default Pokedex;
