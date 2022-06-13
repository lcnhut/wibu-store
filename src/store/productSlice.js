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
      const data = action.payload.data;

      const formattedData = data.map((item) => {
        let total = 0;
        item.colors.forEach((color) => {
          color.sizes.map((size) => {
            total += size.inStock;
          });
          return total;
        });

        return {
          ...item,
          inStock: total,
        };
      });

      state.isLoading = false;
      state.list = formattedData;
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
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
