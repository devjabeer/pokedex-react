import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemon } from "../services/api";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (_, thunkAPI) => {
    return await getPokemon();
  }
);

// First, define the reducer and action creators via `createSlice`
const { actions, reducer } = createSlice({
  name: "pokemon",
  initialState: {
    loading: true,
    pokemon: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.pokemon.push(...action.payload);
        state.loading = false;
      })
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
      });
  },
});

export default reducer;
