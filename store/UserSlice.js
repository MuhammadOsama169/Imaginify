import { createSlice } from '@reduxjs/toolkit';

const initialState = { isUserLoggedIn: false, userDetails: null };

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isUserLoggedIn = true;
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.isUserLoggedIn = false;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
