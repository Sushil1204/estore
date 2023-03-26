import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./redux/reducers/productSlice";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsList/>} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
};

export default App;
