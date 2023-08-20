import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decrement, increment, remove } from "../../../Redux/Cart/CartActions";

function CartItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-around items-center  my-4">
      <div className="w-16">
        <img src={product.image01} alt="" />
      </div>

      <div>
        <p className="text-sm font-bold">{product.categoty}</p>
        <div className="text-sm mt-2">
          <span>{product.quantity} x</span>
          <span>{product.price} $</span>
        </div>
      </div>
      <div>
        <button
          onClick={() => dispatch(increment(product))}
          className="py-1 px-3 text-sm rounded-l bg-red-200 text-orange-600"
        >
          -
        </button>
        <button className="py-1 px-3 text-sm bg-red-200 text-orange-600">
          {product.quantity}
        </button>
        <button
          onClick={() => dispatch(decrement(product))}
          className="py-1 px-3 text-sm rounded-r bg-red-200 text-orange-600"
        >
          +
        </button>
      </div>
      <div onClick={() => dispatch(remove(product))} className="text-red-700 text-sm">
        <FaTrashAlt />
      </div>
    </div>
  );
}

export default CartItem;
