import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { Fragment, useContext, useEffect } from "react";
import { CategoriesContext } from "../../context/Categories.context";
import { useState } from "react";
import ProductCard from "../../components/productCard/ProductCard.component";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-route-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
