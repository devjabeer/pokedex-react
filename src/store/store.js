import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: rootReducer,
  },
});
