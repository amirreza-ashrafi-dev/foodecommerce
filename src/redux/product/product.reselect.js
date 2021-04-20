import { createSelector } from "reselect";

const products = (state) => state.products;

export const allProducts = createSelector(
  [products],
  (productList) => productList.products
);
