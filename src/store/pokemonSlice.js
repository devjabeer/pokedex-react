import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemon } from "../services/api";

// Pokemon async operations
export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (next, thunkAPI) => {
    const val = thunkAPI.getState((state) => state);
    // if its not first load and not next page and there is data in pokemon state, then don't call again
    if (val.pokemon.pokemon.length && !next) return false;
    // fetch next page
    return await getPokemon(next);
  }
);

const { reducer } = createSlice({
  name: "pokemon",
  initialState: {
    loading: true,
    pokemon: [],
    next: "",
  },
  reducers: {},
  // Extra reducers using builder, as per RTK
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
