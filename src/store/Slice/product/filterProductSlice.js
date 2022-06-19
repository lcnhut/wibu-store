import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: ['500', '1000', '1500'],
  categories: [
    'Arizona Slide Sandal',
    ' Reverse Leather Thong',
    'Beaded Rope Sandals',
    'Jenny Slide Sandals',
    'Fragolina Sandals',
  ],
  color: [],
  size: [36, 37, 38, 39, 40, 41, 42],
};

const filterProductSlice = createSlice({
  name: 'filterProductSlice',
  initialState,
  reducers: {},
});

export const {} = filterProductSlice.actions;
export default filterProductSlice.reducer;
