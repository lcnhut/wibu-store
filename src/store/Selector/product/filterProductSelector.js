// import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import { convertAllProductToFilterData } from '../../../utils/filterFunction';
import '../../../utils/getColorFromList';

// filter product
export const getFilterCategoriesProduct = (state) =>
  state.filterProduct.categories;
export const getFilterColorProduct = (state) => state.filterProduct.color;
export const getFilterPriceProduct = (state) => state.filterProduct.price;
export const getFilterSizeProduct = (state) => state.filterProduct.size;
// product

export const getAllProduct = (state) => state.product.list;

// filter
export const getFilterCategories = (state) => state.filter.categories;
export const getFilterColor = (state) => state.filter.colors;
export const getFilterPrice = (state) => state.filter.price;
export const getFilterSize = (state) => state.filter.size;

export const getFilterProductSelector = createSelector(
  [
    getAllProduct,
    getFilterColor,
    getFilterSize,
    getFilterCategories,
    getFilterPrice,
  ],
  (
    getAllProduct,
    getFilterColor,
    getFilterSize,
    getFilterCategories,
    getFilterPrice
  ) => {
    //filter color
    let dataBeforFilter = convertAllProductToFilterData(getAllProduct)
      .filter((item) => {
        if (getFilterColor.length > 0) {
          let AddToDataForFilter = getFilterColor.concat(item.colors);
          let tempData = Array.from(new Set(AddToDataForFilter));
          return AddToDataForFilter.length > tempData.length;
        } else {
          return true;
        }
      })
      .filter((item) => {
        if (getFilterSize !== 0) {
          return item.sizes.includes(getFilterSize);
        } else {
          return true;
        }
      })
      .filter((item) => {
        if (getFilterCategories && getFilterCategories !== '') {
          return item.categories === getFilterCategories;
        } else {
          return true;
        }
      })
      .filter((item) => {
        if (getFilterPrice < 100) return item.prices <= getFilterPrice;
        else {
          return item.prices >= getFilterPrice;
        }
      });

    let dataAfterFilter = dataBeforFilter.map((item) => item.id);
    let result = getAllProduct.filter((product) =>
      dataAfterFilter.includes(product.id)
    );
    return result;
  }
);
