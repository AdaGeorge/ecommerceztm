import { useParams } from "react-router-dom";
import { CategoryRouteContainer, CategoryTitle } from "./category.styles.js";
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
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryRouteContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryRouteContainer>
    </Fragment>
  );
};

export default Category;
