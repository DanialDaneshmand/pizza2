import React, { useState } from "react";
import HeaderTitle from "../components/UI/HeaderTitle";
import { Link } from "react-router-dom";

function Login() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
  });
  const changeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const checkInputs = () => {
    if (!userInfo.name && !userInfo.password) {
      alert("fill all fields ...");
    }
  };
  return (
    <section>
      <HeaderTitle title="Login" />
      <div className="flex flex-col items-center justify-center mt-32">
        <div className="flex flex-col  mg:w-5/12 w-7/12 lg:w-4/12 py-8 px-8 rounded-md bg-orange-200 mb-4">
          <input
            className="border-b outline-none bg-orange-200 mb-4 border-gray-400 py-2"
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={changeHandler}
          />

          <input
            className="border-b outline-none bg-orange-200 mb-4 border-gray-400 py-2"
            type="text"
            name="password"
            placeholder="Enter your password"
            onChange={changeHandler}
          />
          <button onClick={checkInputs} className="border-orange-600 bg-orange-600 mt-4 py-2 px-4 rounded text-white w-4/12 md:w-3/12">
            Login
          </button>
        </div>
        <div className="mb-32">
          <Link  to="/rigester" className="text-sm text-gray-500 ">Don't have an account?Create an account</Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
