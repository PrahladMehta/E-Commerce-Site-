import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Shop></Shop>}></Route>
          <Route
            path="/mens"
            element={<ShopCategory category="men"></ShopCategory>}
          ></Route>
          <Route
            path="/womens"
            element={<ShopCategory category="women"></ShopCategory>}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory category="kids"></ShopCategory>}
          ></Route>
          <Route path="/product" element={<Product></Product>}>
            <Route path=":porductId" element={<Product></Product>}></Route>
          </Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/login" element={<LoginSignup></LoginSignup>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
