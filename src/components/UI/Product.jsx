import React from "react";

function Product({ product }) {
  const { title, image01, price } = product;
  return (
    <div  className="border rounded flex flex-col items-center pt-2">
      <img src={image01} alt="" className="w-8/12 " />
      <p className="text-center font-bold mt-6">{title}</p>
      <div className="flex justify-around items-center my-4 w-full">
        <p className="font-bold text-orange-600">{price} $</p>
        <button className="bg-orange-600 rounded text-sm py-2 px-6 text-white">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
