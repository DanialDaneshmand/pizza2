import React from "react";
import Product from "../UI/Product";

function ProductList({filteredProducts}) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-16 md:px-32 mt-16">
      {filteredProducts.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
}

export default ProductList;
