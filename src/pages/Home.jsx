import React from "react";
import heroImg from "../assets/images/hero.png";
import { FaCar } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="grid grid-cols-2">
      <div
        style={{ direction: "rtl" }}
        className="flex flex-col gap-8 px-16 py-32 text-slate-900"
      >
        <p className="text-2xl font-bold">راهی اسان برای سفارش دادن</p>
        <p className="text-4xl font-bold">
          <span className="text-orange-600">گرسنه ای ؟</span>یه لحظه صبر کن غذا{" "}
          <span className="text-orange-600">پشت دره</span>
        </p>
        <p className=" text-gray-500">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان  است، چاپگرها و متون بلکه  از طراحان گرافیک است از طراحان گرافیک است
        </p>
        <div className="flex gap-8 items-center">
          <button className="font-bold hover:bg-slate-800 rounded-lg bg-orange-600 text-white py-2 px-4 ">
            همین حالا سفارش دهید
          </button>
          <button className="font-bold border border-orange-600 text-orange-600 py-2 px-4 rounded-lg">
               <Link to='/foods'>مشاهده همه غذاها</Link>
          </button>
        </div>
        <div className="flex gap-16">
          <p className="flex gap-2 items-center">
            <span className="p-1 inline-block bg-orange-600 text-white rounded-full">
              <FaShieldHalved />
            </span>
            <span>پرداختی ایمن</span>
          </p>
          <p className="flex gap-1 items-center">
            <span className="p-1 inline-block bg-orange-600 text-white rounded-full">
              <FaCar />
            </span>
            <span>پیک رایگان</span>
          </p>
        </div>
      </div>
      <div>
        <img src={heroImg} alt="hero" />
      </div>
    </section>
  );
}

export default Home;
