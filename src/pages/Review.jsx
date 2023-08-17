import React from "react";

function Review() {
  return (
    <div className="mt-8 w-full">
      <div className="w-full flex flex-col items-start px-16 md:px-32">
        <div>
          <p className="text-lg font-bold">Danial Daneshmand</p>
          <p className="text-sm text-gray-500">epample@gmail.com</p>
          <p className="text-sm text-gray-500 mt-4">Greate Food</p>
        </div>
        <div>
          <p className="text-lg font-bold">Danial Daneshmand</p>
          <p className="text-sm text-gray-500">epample@gmail.com</p>
          <p className="text-sm text-gray-500 mt-4">Greate Food</p>
        </div>{" "}
        <div>
          <p className="text-lg font-bold">Danial Daneshmand</p>
          <p className="text-sm text-gray-500">epample@gmail.com</p>
          <p className="text-sm text-gray-500 mt-4">Greate Food</p>
        </div>
      </div>
      <div className="mb-8 flex justify-center pt-8 ">
      <div className="flex flex-col w-7/12 mg:w-6/12 bg-orange-200 rounded-md p-8">
        <input className="border-b outline-none border-gray-400 py-2 bg-orange-200" type="text" placeholder="Enter your name"/>
        <input className="border-b outline-none mt-2 border-gray-400 py-2 bg-orange-200" type="text" placeholder="Enter your email"/>
        <textarea className="border-b outline-none pt-8 border-gray-400 bg-orange-200" placeholder="Write your review" name="review" id="review" cols="10" rows="5"></textarea>
        <button className="border mt-8 rounded-md w-28 py-2 border-orange-600 bg-orange-600 text-white">Submit</button>
      </div>
      </div>
    </div>
  );
}

export default Review;
