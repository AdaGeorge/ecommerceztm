import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  let existingCartItem = cartItems.find(
    (product) => product.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];

  // if (!cartItems) {
  //   productToAdd.quantity = 1;
  //   cartItems.push(productToAdd);
  //   return cartItems;
  // } else if (
  //   cartItems?.find((product) => product.name === productToAdd.name) !==
  //   undefined
  // ) {
  //   let product = cartItems?.find(
  //     (product) => product.name === productToAdd.name
  //   );
  //   product.quantity++;
  //   return cartItems;
  // } else {
  //   productToAdd.quantity = 1;
  //   cartItems.push(productToAdd);
  //   return cartItems;
  // }
};

//the actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
