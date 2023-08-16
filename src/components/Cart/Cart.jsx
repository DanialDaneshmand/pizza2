import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Cart({ activeCart, setActiveCart }) {
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();
  return (
    <section
      className={`cart__bg h-full w-full  ${
        activeCart ? "fixed top-0 right-0" : "hidden"
      }`}
    >
      <div className="w-[400px] h-full bg-white fixed right-0 top-0">
        <div className="p-6">
          <span className="text-lg" onClick={() => setActiveCart(!activeCart)}>
            <FaRegTimesCircle />
          </span>
        </div>
        {
          cart.length?cart.map(item=>(
            <CartItem key={item.id} product={item}/>
          )):<div className="text-center mt-8">
            <p className="text-lg font-bold">no item added to the cart !</p>
          </div>
        }
        <div className=" px-4 bg-orange-600  py-6 w-full fixed bottom-0">
          <div className="flex ">
            <p className="text-white ">Total Price : <span>{total} $</span></p>
            <Link to="/checkout" className="ml-32">
              <button className="bg-white text-orange-600 py-1 px-4 text-sm rounded">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
