import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from './auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuthorized: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refresh.pending](state) {
      state.isRefreshing = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refresh.rejected](state) {
      state.isRefreshing = false;
    },
  },
  // extraReducer: builder => {
  //   builder
  // .addCase(register.pending, state => {
  //   state.isRefreshing = true;
  // })
  // .addCase(register.fulfilled, (state, action) => {
  //   state.user = action.payload.user;
  //   state.token = action.payload.token;
  //   state.isAuthorized = true;
  //   state.isRefreshing = false;
  // })
  // .addCase(register.rejected, (state, action) => {
  //   state.isRefreshing = false;
  //   state.error = action.payload;
  // })
  // .addCase(login.pending, state => {
  //   state.isRefreshing = true;
  // })
  // .addCase(login.fulfilled, (state, action) => {
  //   state.user = action.payload.user;
  //   state.token = action.payload.token;
  //   state.isAuthorized = true;
  //   state.isRefreshing = false;
  // })
  // .addCase(login.rejected, (state, action) => {
  //   state.isRefreshing = false;
  //   state.error = action.payload;
  // })
  // .addCase(logout.pending, state => {
  //   state.isRefreshing = true;
  // })
  // .addCase(logout.fulfilled, state => {
  //   state.user = { name: null, email: null };
  //   state.token = null;
  //   state.isAuthorized = false;
  //   state.isRefreshing = false;
  // })
  // .addCase(logout.rejected, (state, action) => {
  //   state.isRefreshing = false;
  //   state.error = action.payload;
  // })
  // .addCase(refresh.pending, state => {
  //   state.isRefreshing = true;
  // })
  // .addCase(refresh.fulfilled, (state, action) => {
  //   state.user = action.payload;
  //   state.isAuthorized = true;
  //   state.isRefreshing = false;
  // })
  // .addCase(refresh.rejected, (state, action) => {
  //   state.isRefreshing = false;
  //   state.error = action.payload;
  // });
});

export const authReducer = authSlice.reducer;
