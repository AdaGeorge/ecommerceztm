//Components
import ProductCard from "../productCard/ProductCard.component";
//Styles
import "./categoryPreview.styles.scss";
//router
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(`${title}`);
  };

  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={goToCategory}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
