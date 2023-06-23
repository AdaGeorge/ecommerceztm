import { Routes, Route } from "react-router-dom";

//routes
import Home from "./routes/home/Home.component";
import Navbar from "./routes/navbar/Navbar.component";
import Shop from "./routes/shop/Shop.component";
import SignIn from "./routes/signIn/SignIn.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
