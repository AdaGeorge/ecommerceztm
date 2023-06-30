import { createContext, useState } from "react";

//mockData
import PRODUCTS from "../shopData.json";

//the actual value you want to access
export const ProductsContext = createContext({
  currentProducts: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
