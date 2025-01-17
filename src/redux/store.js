import { configureStore } from "@reduxjs/toolkit";
import { teachersReducer } from "./teachers/slice.js";
import { authReducer } from "./auth/slice.js";
import { favoritesReducer } from "./favorites/slice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer,
    teachers: teachersReducer,
  },
});
