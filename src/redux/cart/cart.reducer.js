import CartActions from "./cart.types";
import { AddToCart } from "./cart.utils";

const INITIAL_STATE = {
  cart: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActions.ADD_TO_CART:
      return {
        ...state,
        cart: AddToCart(state.cart, action.payload),
      };

    default:
      return state;
  }
};

export default CartReducer;
