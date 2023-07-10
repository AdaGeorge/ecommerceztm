// styles
import "./checkoutItem.styles.scss";
// context
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  const { deleteProductInCart, addItemToCart, deleteItemInCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(product);
  const removeItemHandler = () => deleteItemInCart(product);
  const clearItemHandler = () => deleteProductInCart(product);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          <span>&#10094;</span>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          <span>&#10095;</span>
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
