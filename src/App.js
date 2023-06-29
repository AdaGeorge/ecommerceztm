import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/auth/Authentication.component";

//routes
import Home from "./routes/home/Home.component";
import Navbar from "./routes/navbar/Navbar.component";
import Shop from "./routes/shop/Shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
