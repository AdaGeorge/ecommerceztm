import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/auth/Authentication.component";

//routes
import Home from "./routes/home/Home.component";
import Navbar from "./routes/navbar/Navbar.component";
import Shop from "./routes/shop/Shop.component";
import Checkout from "./routes/checkout/Checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
