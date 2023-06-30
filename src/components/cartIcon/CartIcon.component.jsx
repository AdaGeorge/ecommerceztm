//styles
import "./cartIcon.styles.scss";
//svg
import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";
//Context
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleMenu = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleMenu}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
