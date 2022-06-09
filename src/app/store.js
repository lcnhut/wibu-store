import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from "../store/productStore";
export const store = configureStore({
  reducer: {
    product: productReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  },
});
