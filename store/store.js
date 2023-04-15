import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './photoSlice';
import usersReducer from './UserSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    photo: photoReducer,
  },
});
