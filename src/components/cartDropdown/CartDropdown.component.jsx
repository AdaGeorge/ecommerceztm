import Button from "../buttons/Button.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cartDropdown.styles.js";
//Context
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import CartItem from "../cartItem/CartItem.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const toggleHandler = () => {
    setIsCartOpen(!isCartOpen);
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((product) => (
            <CartItem key={product.id} cartItem={product} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={toggleHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
