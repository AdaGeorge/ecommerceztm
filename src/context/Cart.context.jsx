import { createContext, useReducer } from "react";

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

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CART_ACTION_TYPES = {
  CART_ITEMS: "CART_ITEMS",
  TOGGLE_CART_OPEN: "TOGGLE_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, isCartOpen, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = (bool) => {
    dispatch({
      type: CART_ACTION_TYPES.TOGGLE_CART_OPEN,
      payload: { isCartOpen: bool },
    });
  };
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((acc, el) => {
      return acc + el.quantity;
    }, 0);
    let newCartTotal = 0;
    newCartItems.map((el) => (newCartTotal += el.price * el.quantity));

    dispatch({
      type: CART_ACTION_TYPES.CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const deleteItemInCart = (productToRemove) => {
    const newCartItems = deleteOneItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const deleteProductInCart = (cartItemToClear) => {
    const newCartItems = deleteProduct(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
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
