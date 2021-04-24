import { createSelector } from "reselect";

const Cart = (state) => state.Cart;

export const selectCartItems = createSelector(
  [Cart],
  (cartItem) => cartItem.cart
);

export const TotalItems = createSelector([selectCartItems], (items) =>
  items.reduce((accumilator, item) => accumilator + item.quantity, 0)
);

export const totalPrice = createSelector([selectCartItems], (items) =>
  items.reduce((accumilator, item) => item.price + accumilator, 0)
);
