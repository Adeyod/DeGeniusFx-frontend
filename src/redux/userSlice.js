import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser'))
    : null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
      state.error = false;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUser: (state, action) => {
      (state.currentUser = action.payload),
        localStorage.removeItem('currentUser');
      state.loading = false;
      state.error = false;
    },
  },
});

export const { logoutUser, loginFailure, loginStart, loginSuccess } =
  userSlice.actions;
export default userSlice.reducer;
