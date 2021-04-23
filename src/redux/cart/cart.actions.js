import cartTypes from "./cart.types";

export const AddToCart = (cart) => ({
  type: cartTypes.ADD_TO_CART,
  payload: cart,
});
