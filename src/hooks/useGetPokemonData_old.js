import { useEffect, useState } from "react";
import { ALT_URL, BASE_URL, SVG_URL } from "../config";
import axios from "axios";

export default function useGetPokemonData() {
  const [pokemonData, setpokemonData] = useState(null);
  const [url, setUrl] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + "pokemon?limit=20&offset=0")
      .then((res) => {
        const pokemonData = [];
        const pokemonURL = [];
        const { results } = res.data;
        results.forEach((element) => {
          // Getting ID
          const id = element.url.split("/").at(-2);
          //   setUrl((o) => [...o, element.url]);
          // Getting IMG
          let img;
          if (id < 650) {
            img = `${SVG_URL}${id}.svg`;
          } else {
            img = `${ALT_URL}${id}.png`;
          }
          // Getting Name
          const name = element.name
            .split("-")
            .map((e) => {
              return e[0].toUpperCase() + e.substr(1);
            })
            .join("-");

          // Getting Types
          // const types =  getType(element.url);
          // console.log(types);
          // Setting Pokemon
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

  console.log("after effect;");

  async function getType(url) {
    return await axios.get(url).then((res) => {
      return res.data.types.map((e) => {
        return e.type.name;
      });
    });
  }
  console.log(url);
  return pokemonData;
}
