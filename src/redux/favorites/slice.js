import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const { name, surname } = action.payload;
      if (
        !state.items.some(
          item => item.name === name && item.surname === surname
        )
      ) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites(state, action) {
      const { name, surname } = action.payload;
      state.items = state.items.filter(
        item => item.name !== name || item.surname !== surname
      );
    },
    setFavorites(state, action) {
      state.items = action.payload;
    },
    resetFavorites(state) {
      state.items = [];
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  setFavorites,
  resetFavorites,
} = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
export const selectFavorites = state => state.favorites.items;
