import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTeachers, setLoading, setError } from "./slice.js";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const response = await fetch(
        "https://test-learn-lingo-default-rtdb.firebaseio.com/teachers.json"
      );
      const data = await response.json();
      thunkAPI.dispatch(setTeachers(data));
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);
