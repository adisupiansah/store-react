import { Routes, Route } from "react-router-dom";
import Navigasi from "../web/Navigasi";
import Home from "../web/Home";
import Product from "../web/Product";
import Cartpage from "../web/cart/Cartpage";
import Header from "../web/Header";

const MyWeb = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cartpage />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <div className="fixed-top">
                <Header/>
                <Navigasi />
              </div>
              <Home />
              <Product />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default MyWeb;
