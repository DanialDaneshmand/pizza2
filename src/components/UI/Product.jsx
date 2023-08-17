import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Cart/CartActions";
import { Link } from "react-router-dom";

function Product({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { title, image01, price ,id} = product;
  const checkCart = () => {
    return cart.find((p) => p.id === product.id);
  };
  return (
    <div className="border rounded flex flex-col items-center pt-2">
      <img src={image01} alt="" className="w-8/12 " />
      <p className="text-center font-bold mt-6">
        <Link to={`/foods/${id}`}>{title}</Link>
      </p>
      <div className="flex justify-around items-center my-4 w-full">
        <p className="font-bold text-orange-600">{price} $</p>
        {checkCart() ? (
          <button className="bg-orange-600 rounded text-sm py-2 px-6 text-white">
            <Link to="/cart">go to cart</Link>
          </button>
        ) : (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-orange-600 rounded text-sm py-2 px-6 text-white"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
