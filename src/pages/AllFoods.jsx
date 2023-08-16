import React, { useEffect, useState } from "react";
import bg from "../assets/images/bg.jpg";
import products from "../assets/fake-data/products";
import Product from "../components/UI/Product";
import Select from "react-select";
import _ from "lodash";

const options = [
  { value: "", label: "Default" },
  { value: "az", label: "Alphabetically,A-Z" },
  { value: "za", label: "Alphabetically,Z-A" },
  { value: "lowest", label: "Lowest Price" },
  { value: "highest", label: "Highest Price" },
];

function AllFoods() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  return (
    <section>
      <div className="w-full h-[400px] relative" style={{ overflow: "hidden" }}>
        <img src={bg} alt="pizza" />
        <div className="w-full h-[400px] title__container  "></div>
      </div>
      <div className="text-center title">
        <p>All Foods</p>
      </div>
      <div>
        <FilterComp setFilteredProducts={setFilteredProducts} />
        <Foods filteredProducts={filteredProducts} />
      </div>
    </section>
  );
}

export default AllFoods;

function Foods({ filteredProducts }) {
  return (
    <div className="grid mb-32 md:grid-cols-2 lg:grid-cols-4 gap-8 px-32 ">
      {filteredProducts.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
}

function FilterComp({ setFilteredProducts }) {
  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: "Default",
  });
  const [inputValue, setInputValue] = useState("");
  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === "") {
      setFilteredProducts(products);
    } else {
      const updatedProducts = products.filter((p) =>
        p.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setFilteredProducts(updatedProducts);
    }
  };
  const selectChangeHandler = (e) => {
    setSelectedOption(e);
    if (e.value === "") {
      setFilteredProducts(products);
    }
    if (e.value === "lowest") {
      const updatedProducts = _.orderBy(products, ["price"], ["asc"]);
      setFilteredProducts(updatedProducts);
    }
    if (e.value === "highest") {
      const updatedProducts = _.orderBy(products, ["price"], ["desc"]);
      setFilteredProducts(updatedProducts);
    }
    if (e.value === "az") {
      const updatedProducts = _.orderBy(products, ["title"], ["asc"]);
      setFilteredProducts(updatedProducts);
    }
    if (e.value === "za") {
      const updatedProducts = _.orderBy(products, ["title"], ["desc"]);
      setFilteredProducts(updatedProducts);
    }
  };
  return (
    <div className="grid grid-cols-2 py-16">
      <div>
        <input
          className="border w-8/12 ml-32 py-2 px-4 rounded-md"
          type="text"
          value={inputValue}
          onChange={inputChangeHandler}
          placeholder="i'm looking for ..."
          style={{ outline: "none" }}
        />
      </div>
      <div>
        <Select
          value={selectedOption}
          onChange={selectChangeHandler}
          options={options}
          className="w-5/12 ml-64
          "
        />
      </div>
    </div>
  );
}
