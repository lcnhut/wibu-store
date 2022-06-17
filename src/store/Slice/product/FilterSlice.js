import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: [],
  categories: '',
  colors: [],
  size: [],
};

const filterProductSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    addFilterPriceForProduct: (state, action) => {
      state.price.push(action.payload);
    },
    addFilterCategoriesForProduct: (state, action) => {
      state.categories = action.payload;
    },
    addFilterColorForProduct: (state, action) => {
      state.colors.push(action.payload);
    },
    addFilterForProduct: (state, action) => {
      state.size.push(action.payload);
    },
  },
});

export const {
  addFilterPriceForProduct,
  addFilterCategoriesForProduct,
  addFilterColorForProduct,
  addFilterForProduct,
} = filterProductSlice.actions;
export default filterProductSlice.reducer;
