import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetail from "../pages/FoodDetail";
import Desciption from "../pages/Desciption";
import Review from "../pages/Review";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import Login from "../pages/Login";
import Rigester from "../pages/Rigester";
import Contact from "../pages/Contact";

function Routess() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rigester" element={<Rigester />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/foods/:id" element={<FoodDetail />}>
          <Route path="description" element={<Desciption />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="/foods" element={<AllFoods />} />
      </Routes>
    </div>
  );
}

export default Routess;
