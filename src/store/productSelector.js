import { createSelector } from "reselect";
export const selectList = (state) => state.product.list;
export const selectCart = (state) => state.product.cart;
// const selectProduct = (state) => state.product
console.log(selectList);

export const productSelector = createSelector(
  selectList,
  selectCart,
  (list, cart) => {
    return list;
  }
);
