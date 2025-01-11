
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig.js';

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, name }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });
      return {
        email: user.email,
        displayName: user.displayName,
        uid: user.uid,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to register');
    }
  }
);


export const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return {
        email: user.email,
        displayName: user.displayName,
        uid: user.uid,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'Failed to log in');
    }
  }
);


export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to log out');
  }
});


export const refreshUser = createAsyncThunk("auth/refreshUser", async (_, thunkAPI) => {
  try {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          resolve({
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            token: await user.getIdToken(), 
          });
        } else {
          reject(thunkAPI.rejectWithValue('No user found'));
        }
      });
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to refresh user');
  }
});
