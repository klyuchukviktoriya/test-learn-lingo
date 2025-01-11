// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [], // Список избранных преподавателей
// };

// const favoritesSlice = createSlice({
//   name: "favorites",
//   initialState,
//   reducers: {
//     addFavorite(state, { payload }) {
//       if (!state.items.some(item => item.id === payload.id)) {
//         state.items.push(payload);
//       }
//     },
//     removeFavorite(state, { payload }) {
//       state.items = state.items.filter(item => item.id !== payload);
//     },
//   },
// });

// export const { addFavorite, removeFavorite } = favoritesSlice.actions;
// export const favoritesReducer = favoritesSlice.reducer;
// export const selectFavorites = state => state.favorites.items;
