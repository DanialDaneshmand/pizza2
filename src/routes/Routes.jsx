import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetail from "../pages/FoodDetail";
import Desciption from "../pages/Desciption";
import Review from "../pages/Review";

function Routess() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
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
