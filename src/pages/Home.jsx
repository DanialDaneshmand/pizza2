import React, { useEffect, useState } from "react";
import heroImg from "../assets/images/hero.png";
import { FaCar } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Category from "../components/UI/Category";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";
import Product from "../components/UI/Product";

import WhyTastyComp from "../components/UI/WhyTastyComp";
import FoodsCategory from "../components/UI/FoodsCategory";
import ProductList from "../components/ProductList/ProductList";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, minima.",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, minima.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, minima.",
  },
];

function Home() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const clickHandler = (f) => {
    setFilter(f);
    if (f === "all") {
      setFilteredProducts(products);
    }
    if (f === "Burger") {
      const updatedProducts = products.filter(
        (product) => product.category === f
      );
      setFilteredProducts(updatedProducts);
    }
    if (f === "Pizza") {
      const updatedProducts = products.filter(
        (product) => product.category === f
      );
      setFilteredProducts(updatedProducts);
    }
    if (f === "Bread") {
      const updatedProducts = products.filter(
        (product) => product.category === f
      );
      setFilteredProducts(updatedProducts);
    }
  };
  return (
    <>
      <InformationComp />
      <section>
        <Category />
      </section>
      <WhatWeServeComp featureData={featureData} />
      <FoodsCategory filter={filter} clickHandler={clickHandler} />
      <ProductList filteredProducts={filteredProducts} />
      <section>
        <WhyTastyComp />
      </section>
      <HotPizzaComp />
    </>
  );
}

export default Home;

function WhatWeServeComp({ featureData }) {
  return (
    <>
      <section className="flex items-center flex-col px-16">
        <p className="text-xl text-orange-600 font-bold mb-4">what we serve</p>
        <p className="p-6 md:p-0 text-2xl lg:text-4xl font-bold mb-8 w-[400px] text-center">
          just sit back at home we will{" "}
          <span className="text-orange-600">take care</span>
        </p>
        <p className="mb-2 text-gray-600 text-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          voluptatem.
        </p>
        <p className="mb-16 text-gray-600 text-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          voluptatem.
        </p>
      </section>
      <section className="grid md:grid-cols-3 gap-8 md:gap-0 text-center mb-16">
        {featureData.map((item, index) => (
          <div
            key={index}
            className="ml-16  w-8/12 flex  justify-center items-center"
          >
            <div className="flex flex-col items-center">
              <img src={item.imgUrl} alt={item.title} className="w-4/12 mb-3" />
              <p className="text-lg font-bold mb-1">{item.title}</p>
              <p className="text-center text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function InformationComp() {
  return (
    <section className="grid lg:grid-cols-2">
      <div
        style={{ direction: "rtl" }}
        className="order-2 lg:order-1  flex flex-col gap-8 px-16 pb-16 md:py-16 lg:py-32 text-slate-900"
      >
        <p className="text-xl  lg:text-2xl font-bold">
          راهی اسان برای سفارش دادن
        </p>
        <p className="text-2xl  lg:text-4xl font-bold">
          <span className="text-orange-600">گرسنه ای ؟</span>یه لحظه صبر کنی غذا{" "}
          <span className="text-orange-600">پشت دره</span>
        </p>
        <p className=" text-gray-500" style={{ maxWidth: "550px" }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان است، چاپگرها و متون بلکه از طراحان گرافیک است از
          طراحان گرافیک است
        </p>
        <div className="flex gap-8 items-center">
          <button className="text-sm hover:bg-slate-800 rounded-lg bg-orange-600 text-white py-3 px-4 ">
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
      <div className="order-1 lg:order-2 w-11/12 lg:w-full flex justify-center items-center">
        <img src={heroImg} alt="hero" className="w-9/12 md:w-full" />
      </div>
    </section>
  );
}

function HotPizzaComp() {
  const [hotPizaa, setHotPizza] = useState([]);
  useEffect(() => {
    const filteredPizaa = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizaa.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);
  return (
    <section>
      <div className="text-center text-2xl md:text-4xl font-bold">Hot Pizza</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-32 mt-16">
        {hotPizaa.map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </div>
    </section>
  );
}
