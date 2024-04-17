import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CategoryPreview from "../../components/categoryPreview/CategoryPreview.component";
//get categories from redux
import { useSelector } from "react-redux";
import { selectCurrentCategories } from "../../store/categories/category.selectors";

const CategoriesPreview = () => {
  const categories = useSelector(selectCurrentCategories);
  console.log(categories);
  const navigate = useNavigate();

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={categories[title]}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
