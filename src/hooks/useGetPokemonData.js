import { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import axios from "axios";

export default function useGetPokemonData() {
  const [pokemonData, setpokemonData] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const promises = await axios
      .get(BASE_URL + "pokemon?limit=20&offset=0")
      .then((res) => {
        return res.data.results.map((e) => axios.get(e.url));
      });
    const data = await (
      await Promise.all(promises).then((res) => res)
    ).map((e) => e.data);
    setpokemonData(data);
  }
  return pokemonData;
}
