import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonById } from "../services/api";

export const fetchPokemonById = createAsyncThunk(
  "pokemon/fetchDetails",
  async (id, { rejectWithValue }) => {
    try {
      return await getPokemonById(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// First, define the reducer and action creators via `createSlice`
const { reducer } = createSlice({
  name: "pokemonDetails",
  initialState: {
    loading: true,
    pokemon: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonById.pending, (state) => {
        state.loading = true;
        state.pokemon = null;
        state.error = null;
      })
      .addCase(fetchPokemonById.rejected, (state, action) => {
        console.log("rejceted: " + action.payload);
        state.loading = false;
        state.pokemon = null;
        state.error = action.payload;
      })
      .addCase(fetchPokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.pokemon = action.payload;
      });
  },
});

export default reducer;
