//Components
import ProductCard from "../productCard/ProductCard.component";
//Styles
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./categoryPreview.styles.js";
//router
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(`${title}`);
  };

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title onClick={goToCategory}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
