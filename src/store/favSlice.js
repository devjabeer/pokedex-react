import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFavPokemon } from "../services/api";

export const fetchFavPokemon = createAsyncThunk(
  "favPokemon/fetchFavPokemon",
  async (n, { rejectWithValue, getState, dispatch }) => {
    // const val = thunkAPI.getState((state) => state);
    // if (val.pokemon.pokemon.length && !n) return false;
    const current = getState().favorite.pokemon.map((e) => e.id);
    const added = n.filter((e) => !current.includes(e));
    const removed = current.filter((e) => !n.includes(e));
    // console.log("n: " + n);
    // console.log("c: " + current);
    // console.log("a: " + added);
    // console.log("r: " + removed);
    if (removed.length > 0) {
      dispatch(actions.remove(removed));
    }
    try {
      return await getFavPokemon(added);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

// First, define the reducer and action creators via `createSlice`
const { reducer, actions } = createSlice({
  name: "favPokemon",
  initialState: {
    loading: true,
    pokemon: [],
    error: null,
  },
  reducers: {
    remove: (state, action) => {
      action.payload.forEach((id) => {
        const ind = state.pokemon.findIndex((e) => +e.id === +id);
        state.pokemon.splice(ind, 1);
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchFavPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (action.payload) {
          state.pokemon.push(...action.payload);
        }
      });
  },
});

export default reducer;
