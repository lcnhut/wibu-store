import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

import { productApi } from '../../api';

export const getAllAsync = createAsyncThunk('product/getAll', async () => {
  const response = await productApi.getAll();
  return response;
});

export const addProductAsync = createAsyncThunk(
  'product/addProduct',
  async (product) => {
    const response = await productApi.add(product);
    return response;
  }
);
export const deleteProductAsync = createAsyncThunk(
  'product/deleteProduct',
  async (id) => {
    const response = await productApi.delete(id);
    return response.data;
  }
);

export const updateProductAsync = createAsyncThunk(
  'product/updateProduct',
  async (product) => {
    const response = await productApi.update(product);
    return response;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    list: [],
    isLoading: false,
    error: '',
    cart: [
      {
        color: 'brown',
        image: [
          {
            src: 'https://cdn.shopify.com/s/files/1/0277/0472/1542/products/15.1_small.jpg?v=1588567889',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/0277/0472/1542/products/15.1_small.jpg?v=1588567889',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/0277/0472/1542/products/15.1_small.jpg?v=1588567889',
          },
        ],
        name: 'Perth Fabric Twist Sliders',
        price: 50,
        quantity: 1,
        size: 38,
      },
      {
        color: 'black',
        image: [
          {
            src: 'https://cdn.shopify.com/s/files/1/0277/0472/1542/products/14.1_small.jpg?v=1588567113',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/0277/0472/1542/products/14.1_small.jpg?v=1588567113',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/0277/0472/1542/products/14.1_small.jpg?v=1588567113',
          },
        ],
        name: 'Nautical Stripe EVA Flip Flops',
        price: 100,
        quantity: 1,
        size: 36,
      },
    ],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.unshift(action.payload);
      message.success('An item is added to cart!!!');
    },
    removeItemFromCart: (state, action) => {
      let { id } = action.payload;

      let newList = state.cart.filter((item, index) => item.id !== id);
      console.log(newList);
      // let newCart = [...state.cart.slice(0, id), ...state.cart.slice(id + 1)];
      state.cart = newList;
    },

    updateQuantity: (state, action) => {
      let { index } = action.payload;
      if (index >= 0) {
        state.cart[index] = {
          ...action.payload,
          quantity: action.payload.quantity,
        };
      }
    },
  },
  extraReducers: {
    [getAllAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllAsync.rejected]: (state) => {
      state.isLoading = false;
      message.error('Something went wrong!!!');
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
      message.error('Something went wrong!!!');
    },
    [addProductAsync.fulfilled]: (state, action) => {
      let newProduct = action.payload.data;

      let total = 0;
      newProduct.colors.forEach((color) => {
        color.sizes.map((size) => {
          total += size.inStock;
        });
        return total;
      });

      newProduct = {
        ...newProduct,
        inStock: total,
      };

      state.isLoading = false;
      state.list.push(newProduct);
      message.success('A new product is added!!!');
    },

    [deleteProductAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteProductAsync.rejected]: (state) => {
      state.isLoading = false;
      message.error('Delete product failed!');
    },
    [deleteProductAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      const data = state.list.filter((item) => item.id !== action.payload.id);
      state.list = data;
      message.success('A product is deleted!!!');
    },

    [updateProductAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProductAsync.rejected]: (state) => {
      state.isLoading = false;
      message.error('Something went wrong!!!');
    },
    [updateProductAsync.fulfilled]: (state, action) => {
      const updateProduct = action.payload.data;
      let total = 0;
      updateProduct.colors.forEach((color) => {
        color.sizes.map((size) => {
          total += size.inStock;
        });
        return total;
      });

      const productIndex = state.list.findIndex(
        (item) => item.id === updateProduct.id
      );

      if (productIndex >= 0) {
        state.list[productIndex] = {
          ...updateProduct,
          inStock: total,
        };
        state.isLoading = false;
        message.success('A product is updated!!!');
      }
    },
  },
});

export const { addToCart, removeItemFromCart, updateQuantity } =
  productSlice.actions;
export default productSlice.reducer;
