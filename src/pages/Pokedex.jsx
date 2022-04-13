import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemon } from "../store/pokemonSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../components/Loading";

function Pokedex() {
  // const pokemonData = useGetPokemonData();
  // const { loading, pokemon: pokemonData } = useSelector((state) => state);
  const {
    pokemon: pokemonData,
    loading,
    next,
  } = useSelector((state) => state.pokemon);
  // console.log("loading:" + loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  const fetchMorePokemon = () => {
    dispatch(fetchPokemon(next));
  };

  return pokemonData ? (
    <InfiniteScroll
      dataLength={pokemonData.length}
      next={fetchMorePokemon}
      hasMore={next ? true : false}
      scrollThreshold={0.95}
    >
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
      {loading && <Loading />}
    </InfiniteScroll>
  ) : (
    <Loading />
  );
}

export default Pokedex;
