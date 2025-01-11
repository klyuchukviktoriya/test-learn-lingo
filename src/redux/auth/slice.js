
import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations.js';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  isRefreshing: false, // Новый флаг
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
    resetState() {
      return initialState; // Сбрасывает всё состояние
    },
  },
  extraReducers: (builder) => {
    builder
      // Регистрация
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = {
          email: payload.email,
          displayName: payload.displayName,
          uid: payload.uid,
        };
        state.token = null; // Нет токена
        state.isAuthenticated = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || "Failed to register";
      })

      // Логин
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = {
            email: payload.email,
            displayName: payload.displayName,
            uid: payload.uid,
        };
        state.isAuthenticated = true;
    })
    
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || "Failed to log in";
      })

      // Логаут
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || "Failed to log out";
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = payload;
        state.isAuthenticated = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
      
  },
});

export const { resetError, resetState } = authSlice.actions;
export const authReducer = authSlice.reducer;
