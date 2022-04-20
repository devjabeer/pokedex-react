import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFavPokemon } from "../services/api";

// async operation for fetching favorite
export const fetchFavPokemon = createAsyncThunk(
  "favPokemon/fetchFavPokemon",
  async (n, { rejectWithValue, getState, dispatch }) => {
    // whats currently on state
    const current = getState().favorite.pokemon.map((e) => e.id);
    // whats newly added, checking whats not included in current
    const added = n.filter((e) => !current.includes(e));
    // whats been removed, checking whats not included in argument
    const removed = current.filter((e) => !n.includes(e));

    // if there is something in removed then removed it directly from the state
    if (removed.length > 0) {
      dispatch(actions.remove(removed));
    }
    // fetch favorite pokemon
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
    // to removed from the state
    remove: (state, action) => {
      action.payload.forEach((id) => {
        const ind = state.pokemon.findIndex((e) => +e.id === +id);
        state.pokemon.splice(ind, 1);
      });
    },
  },
  // extra reducer for async
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
          // Push whats coming in payload
          state.pokemon.push(...action.payload);
        }
      });
  },
});

export default reducer;
