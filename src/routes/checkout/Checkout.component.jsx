import "./checkout.styles.scss";
import { CartContext } from "../../context/Cart.context";
import { useContext } from "react";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems &&
        cartItems.map((product) => {
          return <CheckoutItem key={product.id} product={product} />;
        })}
      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
