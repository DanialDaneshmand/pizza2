import React from "react";
import { FaTrashAlt } from "react-icons/fa";


function CartItem() {
  return (
    <div className="flex justify-around items-center  my-4">
      <div className="w-16">
        <img src='' alt="" />
      </div>

      <div>
        <p className="text-sm font-bold">buerger</p>
        <div className="text-sm mt-2">
          <span>2x</span>
          <span>10$</span>
        </div>
      </div>
      <div>
        <button className="py-1 px-3 text-sm rounded-l bg-red-200 text-orange-600">
          +
        </button>
        <button className="py-1 px-3 text-sm bg-red-200 text-orange-600">
          2
        </button>
        <button className="py-1 px-3 text-sm rounded-r bg-red-200 text-orange-600">
          -
        </button>
      </div>
      <div className="text-red-700 text-sm">
        <FaTrashAlt />
      </div>
    </div>
  );
}

export default CartItem;
