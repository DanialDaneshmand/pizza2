import React from "react";
import heroImg from "../assets/images/hero.png";
import { FaCar } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Category from "../components/UI/Category";
function Home() {
  return (
    <>
      <section className="grid lg:grid-cols-2">
        <div
          style={{ direction: "rtl" }}
          className="order-2 lg:order-1  flex flex-col gap-8 px-16 pb-16 md:py-16 lg:py-32 text-slate-900"
        >
          <p className="text-xl  lg:text-2xl font-bold">
            راهی اسان برای سفارش دادن
          </p>
          <p className="text-2xl  lg:text-4xl font-bold">
            <span className="text-orange-600">گرسنه ای ؟</span>یه لحظه صبر کنی
            غذا <span className="text-orange-600">پشت دره</span>
          </p>
          <p className=" text-gray-500" style={{ maxWidth: "550px" }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان است، چاپگرها و متون بلکه از طراحان گرافیک است از
            طراحان گرافیک است
          </p>
          <div className="flex gap-8 items-center">
            <button className="text-sm hover:bg-slate-800 rounded-lg bg-orange-600 text-white py-2 px-4 ">
              حالا سفارش دهید
            </button>
            <button className="font-bold border border-orange-600 text-orange-600 py-2 px-4 rounded-lg">
              <Link to="/foods" className="text-sm ">
                مشاهده غذاها
              </Link>
            </button>
          </div>
          <div className="flex gap-16">
            <p className="flex gap-2 items-center">
              <span className="p-1 inline-block bg-orange-600 text-white rounded-full">
                <FaShieldHalved />
              </span>
              <span className="text-sm ">پرداختی ایمن</span>
            </p>
            <p className="flex gap-1 items-center">
              <span className="p-1 inline-block bg-orange-600 text-white rounded-full">
                <FaCar />
              </span>
              <span>پیک رایگان</span>
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-11/12 lg:w-full">
          <img src={heroImg} alt="hero" />
        </div>
      </section>
      <section>
        <Category />
      </section>
    </>
  );
}

export default Home;
