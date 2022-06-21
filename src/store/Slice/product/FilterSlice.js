import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: 0,
  categories: '',
  colors: [],
  size: 0,
  isLoading: false,
};

const filterProductSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    addFilterPriceForProduct: (state, action) => {
      state.price = action.payload;
    },
    addFilterCategoriesForProduct: (state, action) => {
      state.categories = action.payload;
    },
    addFilterColorForProduct: (state, action) => {
      if (!state.colors.includes(action.payload))
        state.colors.push(action.payload);
      else {
        let findIndex = state.colors.indexOf(action.payload);
        state.colors = [
          ...state.colors.slice(0, findIndex),
          ...state.colors.slice(findIndex + 1),
        ];
      }
    },
    addFilterSizeForProduct: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const {
  addFilterPriceForProduct,
  addFilterCategoriesForProduct,
  addFilterColorForProduct,
  addFilterSizeForProduct,
} = filterProductSlice.actions;
export default filterProductSlice.reducer;
