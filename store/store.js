import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import photoReducer from './photoSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    photo: photoReducer,
  },
});
