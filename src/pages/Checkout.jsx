import React, { useState } from "react";
import HeaderTitle from "../components/UI/HeaderTitle";
import { Link } from "react-router-dom";

function Checkout() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    number: "",
    country: "",
    city: "",
  });
  const changeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const checkInputs = () => {
    if (
      !userInfo.name &&
      !userInfo.email &&
      !userInfo.number &&
      !userInfo.country &&
      !userInfo.city
    ) {
      alert('fill all fields ...')
    }
  };
  return (
    <section>
      <HeaderTitle title="Checkout" />
      <div className="flex justify-center mt-32">
        <div className="w-7/12">
          <div>
            <p className="text-lg font-bold">Shipping address</p>
          </div>
          <div className="w-full">
            <input
              name="name"
              onChange={changeHandler}
              value={userInfo.name}
              className="border-b border-gray-400 w-full my-4 py-2 outline-none"
              type="text"
              placeholder="Enter your name"
            />
            <input
              name="email"
              onChange={changeHandler}
              value={userInfo.email}
              className="border-b border-gray-400 w-full my-4 py-2 outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <input
              name="number"
              onChange={changeHandler}
              value={userInfo.number}
              className="border-b border-gray-400 w-full my-4 py-2 outline-none"
              type="text"
              placeholder="Phone number"
            />
            <input
              name="country"
              onChange={changeHandler}
              value={userInfo.country}
              className="border-b border-gray-400 w-full my-4 py-2 outline-none"
              type="text"
              placeholder="Country"
            />
            <input
              name="city"
              onChange={changeHandler}
              value={userInfo.city}
              className="border-b border-gray-400 w-full my-4 py-2 outline-none"
              type="text"
              placeholder="City"
            />
            <button
              onClick={checkInputs}
              className="border-orange-600 bg-orange-600 mt-8 mb-32 py-2 px-4 rounded text-white"
            >
              <Link to="/payment">Payment</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
