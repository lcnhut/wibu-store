// import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import { getSizesForProduct } from '../../../utils/getColorFromList';

// filter product
export const getFilterCategories = (state) => state.filterProduct.categories;
export const getFilterColor = (state) => state.filterProduct.color;
export const getFilterPrice = (state) => state.filterProduct.price;
export const getFilterSize = (state) => state.filterProduct.size;
// product

export const getAllProduct = (state) => state.product.list;
export const getAllColorOfProduct = (state) => {
  return state.product.list.map((item) => {
    return getSizesForProduct({ id: item.id, colors: item.colors });
  });
};
//   state.product.list.map((item) => {});

export const getFilterAllProduct = createSelector(
  (
    getAllProduct,
    getFilterCategories,
    getFilterColor,
    getFilterPrice,
    getFilterSize
  ) => {
    const data = getAllProduct.filter((item) => {});
  }
);

// color: Array(2)
// 0:
// color: "White"
// sizes: Array(3)
// 0: {size: 36, inStock: 50}
// 1: {size: 37, inStock: 222}
// 2: {size: 38, inStock: 15}
