import React from "react";
import categoryImg01 from "../../assets/images/category-01.png";
import categoryImg02 from "../../assets/images/category-02.png";
import categoryImg03 from "../../assets/images/category-03.png";
import categoryImg04 from "../../assets/images/category-04.png";

const categoryData = [
  {
    display: "Fastfood",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },
  {
    display: "Asian Food",
    imgUrl: categoryImg03,
  },
  {
    display: "Row Meat",
    imgUrl: categoryImg04,
  },
];

function Category() {
  return (
    <section className="gap-8 grid sm:grid-cols-2 lg:grid-cols-4  items-center justify-center m-16  ">
      {categoryData.map((item, index) => (
        <div
          style={{cursor:'pointer'}}
          key={index}
          className="category__icon px-16  sm:px-2 h-32 ml-9 bg-orange-200 flex items-center  sm:w-3/4 justify-center"
        >
          <img src={item.imgUrl} alt="category" />
          <p className="text-slate-900 font-bold ml-2">{item.display}</p>
        </div>
      ))}
    </section>
  );
}

export default Category;
