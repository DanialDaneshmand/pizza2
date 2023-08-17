import React from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import bg from "../assets/images/bg.jpg";
import HeaderTitle from "../components/UI/HeaderTitle";

function FoodDetail() {
  const params = useParams();
  const id = params.id;
  const product = products.filter((p) => p.id === id);
  const newProduct = product[0];
  return (
    <section>
      <HeaderTitle title={newProduct.title}/>
    </section>
  );
}

export default FoodDetail;

function
