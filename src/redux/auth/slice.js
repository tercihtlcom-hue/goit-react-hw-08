import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      // Login
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      // Refresh - Pending
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      // Refresh - Fulfilled
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      // Refresh - Rejected
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null };
      });
  },
});

export default authSlice.reducer;