import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { productApi } from "../api";

export const getAllAsync = createAsyncThunk("product/getAll", async () => {
  const response = await productApi.getAll();
  return response;
});

export const addProductAsync = createAsyncThunk(
  "product/addProduct",
  async (product) => {
    const response = await productApi.add(product);
    return response;
  }
);
export const deleteProductAsync = createAsyncThunk(
  "prduct/deleteProduct",
  async (id) => {
    const response = await productApi.delete(id);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
    isLoading: false,
    error: "",
    cartItem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItem.unshift(action.payload);
    },
  },
  extraReducers: {
    [getAllAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllAsync.rejected]: (state) => {
      state.isLoading = false;
      message.error("Something went wrong!!!");
    },
    [getAllAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload.data;
    },

    [addProductAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [addProductAsync.rejected]: (state) => {
      state.isLoading = false;
      message.error("Something went wrong!!!");
    },
    [addProductAsync.fulfilled]: (state, action) => {
      const newProduct = action.payload.data;
      state.isLoading = false;
      state.list.push(newProduct);
      message.success("A new product is added!!!");
    },

    [deleteProductAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteProductAsync.rejected]: (state) => {
      state.isLoading = false;
      message.error("Delete product failed!");
    },
    [deleteProductAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      const data = state.list.filter((item) => item.id !== action.payload.id);
      state.list = data;
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
