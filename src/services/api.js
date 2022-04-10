import { BASE_URL } from "../config";
import axios from "axios";

export const getPokemon = async (n) => {
  let next = "";
  const promises = await axios.get(BASE_URL + `pokemon?${n}`).then((res) => {
    res.data.next ? (next = res.data.next.split("?")[1]) : (next = "");
    return res.data.results.map((e) => axios.get(e.url));
  });
  const data = await (
    await Promise.all(promises).then((res) => res)
  ).map((e) => e.data);
  return { data, next };
};

export const getPokemonById = async (id) => {
  const data = await axios.get(BASE_URL + `pokemon/${id}`).then((res) => {
    return res.data;
  });
  return data;
};
