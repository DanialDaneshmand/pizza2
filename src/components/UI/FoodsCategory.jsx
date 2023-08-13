import React from "react";
import foodCategoryImg01 from "../../assets/images/hamburger.png";
import foodCategoryImg02 from "../../assets/images/pizza.png";
import foodCategoryImg03 from "../../assets/images/bread.png";

function FoodsCategory({filter,clickHandler}) {
  return (
    <section>
      <div className="text-center mb-16">
        <p className="text-4xl font-bold">Popular Foods</p>
      </div>
      <div className="flex justify-center flex-col items-center mb-16">
        <div className="bg-orange-600 rounded py-6 w-9/12 flex justify-center items-center gap-6">
          <button
            onClick={() => clickHandler("all")}
            className={`${filter === "all" && "active"}`}
          >
            All Foods
          </button>
          <button
            onClick={() => clickHandler("Burger")}
            className={`flex justify-center items-center gap-1 ${
              filter === "Burger" && "active"
            }`}
          >
            <img src={foodCategoryImg01} alt="" className="w-6" />
            <span>Burger</span>
          </button>
          <button
            onClick={() => clickHandler("Pizza")}
            className={`flex justify-center items-center gap-1 ${
              filter === "Pizza" && "active"
            }`}
          >
            <img src={foodCategoryImg02} alt="" className="w-6" />
            <span>Pizza</span>
          </button>
          <button
            onClick={() => clickHandler("Bread")}
            className={`flex justify-center items-center gap-1 ${
              filter === "Bread" && "active"
            }`}
          >
            <img src={foodCategoryImg03} alt="" className="w-6" />
            <span>Bread</span>
          </button>
        </div>
        
      </div>
    </section>
  );
}

export default FoodsCategory;
