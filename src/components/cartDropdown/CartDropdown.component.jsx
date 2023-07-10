import Button from "../buttons/Button.component";
import "./cartDropdown.styles.scss";
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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((product) => (
            <CartItem key={product.id} cartItem={product} />
          ))}
      </div>

      <Button onClick={toggleHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
