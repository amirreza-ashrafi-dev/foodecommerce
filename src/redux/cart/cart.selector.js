import { createSelector } from "reselect";

const Cart = (state) => state.Cart;

const selectCartItems = createSelector([Cart], (cartItem) => cartItem.cart);

export const TotalItems = createSelector([selectCartItems], (items) =>
  items.reduce((accumilator, item) => accumilator + item.quantity, 0)
);
