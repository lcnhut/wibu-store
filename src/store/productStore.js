import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApi } from "../api";

export const getAllAsync = createAsyncThunk("product/getAll", async () => {
  const response = await productApi.getAll();
  return response;
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getAllAsync.pending]: (state) => {
      state.loading = true;
    },
    [getAllAsync.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong!!!";
    },
    [getAllAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload.data;
    },
  },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
