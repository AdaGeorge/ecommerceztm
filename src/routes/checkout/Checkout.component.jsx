import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutBox,
  Total,
} from "./checkout.styles.js";
import { CartContext } from "../../context/Cart.context";
import { useContext } from "react";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutBox>
          <span>Product</span>
        </CheckoutBox>
        <CheckoutBox>
          <span>Description</span>
        </CheckoutBox>
        <CheckoutBox>
          <span>Quantity</span>
        </CheckoutBox>
        <CheckoutBox>
          <span>Price</span>
        </CheckoutBox>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </CheckoutHeader>
      {cartItems &&
        cartItems.map((product) => {
          return <CheckoutItem key={product.id} product={product} />;
        })}
      <Total>Total : ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
