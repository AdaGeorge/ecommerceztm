import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//Styles
import "./index.scss";
//Context
//import { CategoriesProvider } from "./context/Categories.context";
// router
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/Cart.context";
//redux Provider
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
