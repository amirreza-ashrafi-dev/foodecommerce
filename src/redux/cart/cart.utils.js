export const AddToCart = (cartItems, cartItemsToAdd) => {
  const existingCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  if (existingCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            price: cartItem.price * 2,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};
