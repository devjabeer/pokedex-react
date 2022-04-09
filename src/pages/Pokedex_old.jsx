import { useEffect, useState } from "react";
import { CircularProgress, Grid, Box } from "@mui/material";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import { ALT_URL, BASE_URL, SVG_URL } from "../config";

function Pokedex() {
  const [pokemonData, setpokemonData] = useState(null);
  useEffect(() => {
    axios
      .get(BASE_URL + "pokemon?limit=50&offset=890")
      .then((res) => {
        const pokemonData = [];
        const { results } = res.data;
        results.forEach((element) => {
          const id = element.url.split("/").at(-2);
          let img;
          if (id < 650) {
            img = `${SVG_URL}${id}.svg`;
          } else {
            img = `${ALT_URL}${id}.png`;
          }
          // const name = element.name[0].toUpperCase() + element.name.substr(1);
          const name = element.name
            .split("-")
            .map((e) => {
              return e[0].toUpperCase() + e.substr(1);
            })
            .join("-");
          const pokemon = {
            id: id,
            name: name,
            img: img,
          };
          pokemonData.push(pokemon);
        });
        setpokemonData(pokemonData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return pokemonData ? (
    <Grid container justifyContent="center" alignContent="center" spacing={2}>
      {pokemonData.map((p) => {
        return <PokemonCard key={p.id} name={p.name} img={p.img} id={p.id} />;
      })}
    </Grid>
  ) : (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}

export default Pokedex;
