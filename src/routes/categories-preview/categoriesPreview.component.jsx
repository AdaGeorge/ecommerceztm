import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/Categories.context";
import { useNavigate } from "react-router-dom";
import CategoryPreview from "../../components/categoryPreview/CategoryPreview.component";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);
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
