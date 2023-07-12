import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//Styles
import "./index.scss";
//Context
import { UserProvider } from "./context/User.context";
import { CategoriesProvider } from "./context/Categories.context";
// router
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/Cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
