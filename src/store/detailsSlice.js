import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonById } from "../services/api";

export const fetchPokemonById = createAsyncThunk(
  "pokemon/fetchDetails",
  async (id, thunkAPI) => {
    return await getPokemonById(id);
  }
);

// First, define the reducer and action creators via `createSlice`
const { reducer } = createSlice({
  name: "pokemonDetails",
  initialState: {
    loading: true,
    pokemon: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemon = action.payload;
      });
  },
});

export default reducer;
