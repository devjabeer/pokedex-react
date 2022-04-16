import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemon } from "../store/pokemonSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../components/Loading";

function Pokedex() {
  // const pokemonData = useGetPokemonData();
  // const { loading, pokemon: pokemonData } = useSelector((state) => state);

  const [fav, setFav] = useState(null);
  const {
    pokemon: pokemonData,
    loading,
    next,
  } = useSelector((state) => state.pokemon);
  // console.log("loading:" + loading);
  const dispatch = useDispatch();
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("fav"));
    favs ? setFav(favs) : setFav([]);
    dispatch(fetchPokemon());
  }, []);

  const saveToFav = (id) => {
    try {
      const f = JSON.parse(localStorage.getItem("fav")) || [];
      if (f.includes(id)) {
        const ind = f.findIndex((e) => e === id);
        f.splice(ind, 1);
        localStorage.setItem("fav", JSON.stringify(f));
        setFav(f);
        return;
      }
      f.push(id);
      localStorage.setItem("fav", JSON.stringify(f));
      setFav(f);
    } catch (error) {
      console.error(error.message);
    }
  };

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
              color={fav.includes(id) ? "red" : "inherit"}
              save={saveToFav}
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
