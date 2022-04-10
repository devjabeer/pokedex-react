import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";
import detailsReducer from "./detailsSlice";
export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    details: detailsReducer,
  },
});
