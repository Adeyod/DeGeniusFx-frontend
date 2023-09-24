import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const globalStore = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default globalStore;
