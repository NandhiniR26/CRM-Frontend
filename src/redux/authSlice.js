
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunks
export const login = createAsyncThunk('auth/login', async (userData) => {
  const response = await axios.post('http://localhost:3001/api/v1/users/login', userData);
  return response.data;
});

export const signup = createAsyncThunk('auth/signup', async (userData) => {
  const response = await axios.post('http://localhost:3001/api/v1/users/register', userData);
  return response.data;
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

