import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './Slice/product/FilterSlice';
import filterProductSlice from './Slice/product/filterProductSlice';
import productReducer from './Slice/product/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    filterProduct: filterProductSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
