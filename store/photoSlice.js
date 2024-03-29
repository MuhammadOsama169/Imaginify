/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});
// eslint-disable-next-line import/no-default-export
export default photoSlice.reducer;
const apikey = process.env.VITE_UNSPLASHED_ACCESS_KEY;

export const fetchPhotos = createAsyncThunk('photo/fetch', async () => {
  const res = await fetch(
    `https://api.unsplash.com/photos/?client_id=${apikey}&per_page=100`
  );
  const data = await res.json();
  return data;
});
