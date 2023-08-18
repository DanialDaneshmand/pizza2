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

import networkImg from "../assets/images/network.png";
import TestImonialSlider from "../components/UI/TestImonialSlider";
import { useDispatch, useSelector } from "react-redux";

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
      <CommentsComp />
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
    <section className="grid lg:grid-cols-2 pt-32">
      <div
        
        className="  flex flex-col gap-8 px-16 pb-16 md:py-16 lg:py-32 text-slate-900"
      >
        <p className="text-xl  lg:text-2xl font-bold">
          Easy way to make an order
        </p>
        <p className="text-2xl  lg:text-4xl font-bold">
          <span className="text-orange-600"> Hungry ?</span>just wait food at
          <span className="text-orange-600"> your door</span>
        </p>
        <p className=" text-gray-500" style={{ maxWidth: "550px" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis minima
          porro, pariatur rem debitis nostrum Omnis minima porro porro,
          pariatur?
        </p>
        <div className="flex gap-8 items-center">
          <button className="text-sm hover:bg-slate-800 rounded-lg bg-orange-600 text-white py-2 md:py-3 px-3 md:px-8 ">
            Order Now
          </button>
          <button className="font-bold border border-orange-600 text-orange-600 py-1 md:py-2 px-3 md:px-8 rounded-lg">
            <Link to="/foods" className="text-sm ">
              All Foods
            </Link>
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <p className="flex md:gap-2 items-center">
            <span className="p-1 inline-block bg-orange-600 text-white rounded-full">
              <FaShieldHalved />
            </span>
            <span className="text-sm "> 100% secure checkout</span>
          </p>
          <p className="flex gap-1 items-center">
            <span className="p-1 inline-block bg-orange-600 text-white rounded-full ">
              <FaCar />
            </span>
            <span> No shiping charge</span>
          </p>
        </div>
      </div>
      <div className=" w-11/12 lg:w-full flex justify-center items-center">
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
      <div className="text-center text-2xl md:text-4xl font-bold">
        Hot Pizza
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-16 sm:px-32 mt-16">
        {hotPizaa.map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </div>
    </section>
  );
}

function CommentsComp() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 my-32 items-center">
      <div className="px-28 order-2 lg:order-1">
        <p className="text-orange-600 text-lg font-bold">Testimonial</p>
        <p className="md:text-3xl text-2xl font-bold my-6">
          What our <span className="text-orange-600">customers</span> are saying
        </p>
        <p className="text-sm text-gray-500 mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quos commodi dolorem, minima placeat ullam? minima placeat ullam?
        </p>
        <TestImonialSlider />
      </div>
      <div className="flex justify-center order-1 lg:order-2">
        <img src={networkImg} alt="network" className="lg:w-full w-10/12" />
      </div>
    </section>
  );
}
