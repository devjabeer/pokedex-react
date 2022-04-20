import { BASE_URL } from "../config";
import axios from "axios";
// API operations:
// fetch pokemon by page,
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
// fetch pokemon by ID
export const getPokemonById = async (id) => {
  const p = await axios.get(BASE_URL + `pokemon/${id}`).then((res) => {
    return res.data;
  });
  const s = await axios.get(p.species.url).then((res) => {
    return res.data;
  });
  p.species.data = s;
  return p;
};
// Fetch favorite pokemon
export const getFavPokemon = async (n) => {
  if (!n || n.length < 1) {
    return null;
  }
  const promises = n
    .sort((a, b) => a - b)
    .map((e) => axios.get(BASE_URL + `pokemon/${e}`));
  const data = await (
    await Promise.all(promises).then((res) => res)
  ).map((e) => e.data);
  return data;
};
// Fetch ability by url, only first english one
export const getAbility = async (url) => {
  return await axios
    .get(url)
    .then(
      (res) =>
        res.data.effect_entries?.filter((e) => e.language.name === "en")[0]
    );
};
