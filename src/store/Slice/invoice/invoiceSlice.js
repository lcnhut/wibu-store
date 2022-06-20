import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

import { invoiceApi } from '../../../api';

export const getAllInvoiceAsync = createAsyncThunk(
  'invoice/getAll',
  async () => {
    const response = await invoiceApi.getAll();
    return response;
  }
);

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    list: [],
    isLoading: true,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [getAllInvoiceAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllInvoiceAsync.rejected]: (state) => {
      state.isLoading = false;
      message.error('Something went wrong!!!');
    },
    [getAllInvoiceAsync.fulfilled]: (state, action) => {
      state.list = action.payload.data;
      state.isLoading = false;
    },
  },
});

export const {} = invoiceSlice.actions;
export default invoiceSlice.reducer;
