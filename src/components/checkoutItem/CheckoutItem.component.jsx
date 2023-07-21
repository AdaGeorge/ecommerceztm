// styles
import {
  CheckoutItemContainer,
  ImageContainer,
  PropOfItem,
  QuantityOfItem,
  RemoveButton,
} from "./checkoutItem.styles.js";
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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <PropOfItem className="name">{name}</PropOfItem>
      <QuantityOfItem className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          <span>&#10094;</span>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          <span>&#10095;</span>
        </div>
      </QuantityOfItem>
      <PropOfItem className="price">{price}</PropOfItem>
      <RemoveButton className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
