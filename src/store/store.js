import { configureStore } from '@reduxjs/toolkit';

import productReducer from '../store/product/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
