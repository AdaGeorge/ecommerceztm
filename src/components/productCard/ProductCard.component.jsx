import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import Button from "../buttons/Button.component";
import {
  ProductCardContainer,
  ProductCardImg,
  ProductCardFooter,
  ProductName,
  ProductPrice,
} from "./productCard.styles.js";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <ProductCardImg src={imageUrl} alt={name} />
      <ProductCardFooter>
        <ProductName className="name">{name}</ProductName>
        <ProductPrice className="price">{price}</ProductPrice>
        <Button buttonType={"inverted"} onClick={addProductToCart}>
          Add to cart
        </Button>
      </ProductCardFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
