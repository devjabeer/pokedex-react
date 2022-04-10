import { BASE_URL } from "../config";
import axios from "axios";
export const getPokemon = async () => {
  const promises = await axios
    .get(BASE_URL + "pokemon?limit=20&offset=0")
    .then((res) => {
      return res.data.results.map((e) => axios.get(e.url));
    });
  return await (
    await Promise.all(promises).then((res) => res)
  ).map((e) => e.data);
};
