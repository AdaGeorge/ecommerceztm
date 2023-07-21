import { CartItemContainer, ItemDetails } from "./cartItem.styles.js";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity}pzs - ${price * quantity}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
