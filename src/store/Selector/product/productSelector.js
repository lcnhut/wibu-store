import { createSelector } from 'reselect';

export const selectList = (state) => state.product.list;
export const selectCart = (state) => state.product.cart;

// loading state of the product

export const getLoadingOfProduct = (state) => state.product.isLoading;
