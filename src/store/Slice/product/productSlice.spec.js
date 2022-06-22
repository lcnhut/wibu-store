/* eslint-disable no-undef */
import { store } from '../../store';
import reducer, {
  addToCart,
  clearCart,
  getAllAsync,
  getByIdAsync,
  removeItemFromCart,
  updateQuantity,
} from './productSlice';

describe('store/product', () => {
  // Test in both admin page and client page
  it('should return initial state', () => {
    const initialState = store.getState().product;
    expect(initialState).toEqual({
      list: [],
      isLoading: true,
      singleProduct: {},
      error: '',
      cart: [],
    });
  });

  it('should get all product data', async () => {
    const result = await store.dispatch(getAllAsync());
    expect(result.type).toBe('product/getAll/fulfilled');

    const state = store.getState().product.list;
    expect(state.length).toBeGreaterThan(0);
  });

  // Test in client page
  it('should get a product by product id', async () => {
    const result = await store.dispatch(getByIdAsync(3));
    expect(result.type).toBe('product/get-by-id/fulfilled');

    const product = store.getState().product.singleProduct;
    expect(product.id).toBe('3');
  });

  // Add an item into an empty cart
  // it('should return an array with added item', () => {
  //   const prevState = {
  //     list: [],
  //     isLoading: true,
  //     singleProduct: {},
  //     error: '',
  //     cart: [],
  //   };

  //   const addedItem = {
  //     id: 1,
  //     total: 30,
  //     size: 36,
  //     name: 'ABC',
  //     brand: 'XYZ',
  //   };

  //   expect(reducer(prevState, addToCart(addedItem))).toEqual({
  //     list: [],
  //     isLoading: true,
  //     singleProduct: {},
  //     error: '',
  //     cart: [
  //       {
  //         id: 1,
  //         total: 30,
  //         size: 36,
  //         name: 'ABC',
  //         brand: 'XYZ',
  //       },
  //     ],
  //   });
  // });

  // Update product quantity in cart
  it('should return an array with updated quantity product', () => {
    const prevState = {
      list: [],
      isLoading: true,
      singleProduct: {},
      error: '',
      cart: [
        {
          index: 0,
          quantity: 1,
          size: 36,
          name: 'ABC',
          brand: 'XYZ',
        },
      ],
    };

    const updatedProduct = {
      index: 0,
      quantity: 2,
      size: 36,
      name: 'ABC',
      brand: 'XYZ',
    };

    expect(reducer(prevState, updateQuantity(updatedProduct))).toEqual({
      list: [],
      isLoading: true,
      singleProduct: {},
      error: '',
      cart: [
        {
          index: 0,
          quantity: 2,
          size: 36,
          name: 'ABC',
          brand: 'XYZ',
        },
      ],
    });
  });

  // Remove item from cart
  it('should return an array without removed item', () => {
    const prevState = {
      list: [],
      isLoading: true,
      singleProduct: {},
      error: '',
      cart: [
        {
          id: 123,
          quantity: 1,
          size: 36,
          name: 'ABC',
        },
        {
          id: 456,
          quantity: 1,
          size: 37,
          name: 'XYZ',
        },
      ],
    };

    expect(reducer(prevState, removeItemFromCart(456))).toEqual({
      list: [],
      isLoading: true,
      singleProduct: {},
      error: '',
      cart: [
        {
          id: 123,
          quantity: 1,
          size: 36,
          name: 'ABC',
        },
      ],
    });
  });

  // Clear cart
  it('should return an empty list', () => {
    const prevState = {
      list: [],
      isLoading: true,
      singleProduct: {},
      error: '',
      cart: [
        {
          id: 123,
          quantity: 1,
          size: 36,
          name: 'ABC',
          brand: 'XYZ',
        },
      ],
    };

    expect(reducer(prevState, clearCart())).toEqual({
      list: [],
      isLoading: true,
      singleProduct: {},
      error: '',
      cart: [],
    });
  });
});
