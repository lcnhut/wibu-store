import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../store/productSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
