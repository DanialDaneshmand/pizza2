import React, { useEffect, useState } from "react";
import products from "../assets/fake-data/products";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import HeaderTitle from "../components/UI/HeaderTitle";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Cart/CartActions";
import ProductList from "../components/ProductList/ProductList";

function FoodDetail() {
  const params = useParams();
  const id = params.id;
  const product = products.filter((p) => p.id === id);
  const newProduct = product[0];
  return (
    <section>
      <HeaderTitle title={newProduct.title} />
      <DetailComp product={newProduct} />
      <div className="w-full flex justify-center mt-16">
        <div className="w-full flex flex-col items-center">
          <div className="w-10/12 border-b pb-2">
            <button>
              <NavLink
                className={(active) =>
                  active.isActive
                    ? "text-lg font-bold text-orange-600"
                    : "text-lg font-bold"
                }
                to={`/foods/${id}/review`}
              >
                Review
              </NavLink>
            </button>
            <button>
              <NavLink
                className={(active) =>
                  active.isActive
                    ? "text-lg font-bold text-orange-600 ml-8"
                    : "text-lg font-bold ml-8"
                }
                to={`/foods/${id}/description`}
              >
                Description
              </NavLink>
            </button>
          </div>
          <Outlet />
        </div>
      </div>

      <YouMightLikeComp />
    </section>
  );
}

export default FoodDetail;

function DetailComp({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [mainImg, setMainImg] = useState("1");
  const setImage = () => {
    if (mainImg === "1") {
      return product.image01;
    }
    if (mainImg === "2") {
      return product.image02;
    }
    if (mainImg === "3") {
      return product.image03;
    }
  };
  const checkCart = () => {
    return cart.find((p) => p.id === product.id);
  };
  return (
    <div className="grid lg:grid-cols-2">
      <div className="flex items-center justify-center ml-16 lg:my-0 my-16">
        <div>
          <div className=" md:w-32 w-16">
            <img
              src={product.image01}
              alt={product.title}
              onClick={() => setMainImg("1")}
            />
          </div>
          <div className=" md:w-32 w-16">
            <img
              src={product.image02}
              alt={product.title}
              onClick={() => setMainImg("2")}
            />
          </div>
          <div className=" md:w-32 w-16">
            <img
              src={product.image03}
              alt={product.title}
              onClick={() => setMainImg("3")}
            />
          </div>
        </div>
        <div className="md:p-16 p-4 lg:w-full w-8/12">
          <img src={setImage()} alt={product.title} />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 md:pl-16 pl-28 ">
        <p className="md:text-4xl text-2xl font-bold">{product.title}</p>
        <p className="text-orange-600">
          Price : <span className="text-xl font-bold">{product.price} $</span>
        </p>
        <p>
          Category :{" "}
          <span className="inline-block py-1 px-2 rounded bg-orange-200">
            {product.category}
          </span>
        </p>
        {checkCart() ? (
          <button className="bg-orange-600 w-4/12 md:w-3/12 rounded text-sm py-2 px-6 text-white">
            <Link to="/cart">go to cart</Link>
          </button>
        ) : (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-orange-600 rounded w-4/12 md:w-3/12 text-sm py-2 px-6 text-white"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}

function YouMightLikeComp() {
  const [filteredProducts,setFilteredProducts]=useState([]);
  useEffect(()=>{
    const updatedProducts=products.filter(p=>p.category==='Pizza');
    setFilteredProducts(updatedProducts)
  },[])
  return (
    <div className="my-16">
      <div className="text-center">
        <p className="text-xl font-bold ">You might also like</p>
      </div>
      <ProductList filteredProducts={filteredProducts}/>
    </div>
  );
}
