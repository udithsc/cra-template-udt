/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../store/store';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: AppState) => state.auth.user;
export const selectCurrentToken = (state: AppState) => state.auth.token;
