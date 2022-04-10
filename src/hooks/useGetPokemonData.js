import { useEffect, useState } from "react";
import { getPokemon } from "../services/api";

// USED BEFORE IMPLEMENTING REDUX TOOLKIT - NOT USING ANYWHERE NOW
export default function useGetPokemonData() {
  const [pokemonData, setpokemonData] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await getPokemon();
    setpokemonData(data);
  }
  return pokemonData;
}
