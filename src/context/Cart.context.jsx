import { createContext, useEffect, useState } from "react";

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

const deleteOneItem = (cartItems, productToRemove) => {
  let existingCartItem = cartItems.find(
    (product) => product.id === productToRemove.id
  );
  if (existingCartItem.quantity > 1) {
    return cartItems?.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return cartItems?.filter((el) => el !== existingCartItem);
};

const deleteProduct = (cartItems, productToErase) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToErase.id);
};

//the actual value you want to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  deleteItemInCart: () => {},
  deleteProductInCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const amountOfProducts = cartItems.reduce((acc, el) => {
      return acc + el.quantity;
    }, 0);
    let cartTotalPrice = 0;
    cartItems.map((el) => (cartTotalPrice += el.price * el.quantity));
    setCartCount(amountOfProducts);
    setCartTotal(cartTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const deleteItemInCart = (productToRemove) => {
    setCartItems(deleteOneItem(cartItems, productToRemove));
  };
  const deleteProductInCart = (productToAdd) => {
    setCartItems(deleteProduct(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    deleteItemInCart,
    deleteProductInCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
