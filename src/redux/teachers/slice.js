import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teachers: [], // Массив учителей
  isLoading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setTeachers(state, action) {
      state.teachers = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setTeachers, setLoading, setError } = teachersSlice.actions;

export const teachersReducer = teachersSlice.reducer;
