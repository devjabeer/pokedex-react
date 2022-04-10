import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemon } from "../services/api";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (n, thunkAPI) => {
    const val = thunkAPI.getState((state) => state);
    if (val.pokemon.pokemon.length && !n) return false;
    return await getPokemon(n);
  }
);

// First, define the reducer and action creators via `createSlice`
const { reducer } = createSlice({
  name: "pokemon",
  initialState: {
    loading: true,
    pokemon: [],
    next: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.pokemon.push(...action.payload.data);
          state.next = action.payload.next;
        }
      });
  },
});

export default reducer;
