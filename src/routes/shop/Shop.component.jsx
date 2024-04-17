import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
//components
import CategoriesPreview from "../categories-preview/categoriesPreview.component";
import Category from "../category/Category.component";
//state
import { setCategoriesMap } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
//firebase
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={":category"} element={<Category />} />
    </Routes>
  );
};

export default Shop;
