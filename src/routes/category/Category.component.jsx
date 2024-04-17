import { useParams } from "react-router-dom";
import { CategoryRouteContainer, CategoryTitle } from "./category.styles.js";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import ProductCard from "../../components/productCard/ProductCard.component";
//get categories from redux
import { useSelector } from "react-redux";
import { selectCurrentCategories } from "../../store/categories/category.selectors.js";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCurrentCategories);

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
