import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";
import detailsReducer from "./detailsSlice";
import favReducer from "./favSlice";
// Configured store as per RTK
export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    details: detailsReducer,
    favorite: favReducer,
  },
});
