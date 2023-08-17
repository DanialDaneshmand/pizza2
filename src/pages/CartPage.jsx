import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import {remove} from '../Redux/Cart/CartActions'
import HeaderTitle from '../components/UI/HeaderTitle'
import { Link } from "react-router-dom";

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  return (
    <section className=" w-full flex flex-col items-center mb-32 ">
      <HeaderTitle title='Cart'/>
      {
        cart.length!==0?<div className="w-9/12 my-16">
        <div className="flex w-full border-b border-slate-900">
          <div className="w-2/12 border flex justify-center items-center py-2">
            <p className="text-lg ">Image</p>
          </div>
          <div className="w-4/12 border flex justify-center items-center py-2">
            <p className="text-lg ">Product Title</p>
          </div>
          <div className="w-2/12 border flex justify-center items-center py-2">
            <p className="text-lg ">Price</p>
          </div>
          <div className="w-2/12 border flex justify-center items-center py-2">
            <p className="text-lg ">Quantity</p>
          </div>
          <div className="w-2/12 border flex justify-center items-center py-2">
            <p className="text-lg ">Delete</p>
          </div>
        </div>
        <CartItems cart={cart} />
      </div>:<div className="w-full h-screen flex justify-center py-16">
      <p className="text-xl font-bold">No item added to cart</p>
      </div>
      }
      <div className="w-9/12 ">
        <p className="text-lg">Subtotal: <span className="text-xl text-orange-600">{total}</span> $</p>
        <p className="text-sm text-gray-500 mt-1">
          Texas and Shiping will calculate at checkout
        </p>
        <div className="flex gap-4 mt-4">
          <button className="border border-orange-600 bg-orange-600 text-white py-1 px-4 rounded-md"><Link to='/'>Continue shopping </Link></button>
          <button className="border border-orange-600 bg-orange-600 text-white py-1 px-4 rounded-md"><Link to='/checkout'>Proceed To Checkout</Link></button>
        </div>
      </div>
    </section>
  );
}

export default CartPage;

function CartItems({ cart }) {
  const dispatch = useDispatch();

  return (
    <>
      {cart.map((product) => (
        <div className="flex w-full ">
          <div className="w-2/12 border flex justify-center items-center py-2">
            <img src={product.image01} alt="" className="w-16"/>
          </div>
          <div className="w-4/12 border flex justify-center items-center py-2">
            <p className="text-sm md:text-lg">{product.title}</p>
          </div>
          <div className="w-2/12 border flex justify-center items-center py-2">
            <p className="text-sm md:text-lg">{product.price} $</p>
          </div>
          <div className="w-2/12 border flex justify-center items-center py-2">
            <p className="text-sm md:text-lg">{product.quantity}</p>
          </div>
          <div className="w-2/12 border flex justify-center items-center py-2">
            <p className="text-sm md:text-lg text-red-700" onClick={()=>dispatch(remove(product))}><FaTrashAlt/></p>
          </div>
        </div>
      ))}
    </>
  );
}
