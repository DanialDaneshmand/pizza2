import React, { useState } from "react";
import logo from "../../assets/images/res-logo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaShoppingCart,
  FaBars,
  FaUserPlus,
  FaHome,
  FaHamburger,
  FaHeadphones,
} from "react-icons/fa";

const items = [
  { display: "Home ", to: "/" ,icon:<FaHome/>},
  { display: "Foods ", to: "/foods" ,icon:<FaHamburger/>},
  { display: " Cart", to: "/cart",icon:< FaShoppingCart/>},
  { display: " Contact", to: "/contact" ,icon:<FaHeadphones/>},
];
const Header = ({ activeCart, setActiveCart }) => {
  const [active, setActive] = useState(true);
  const cart = useSelector((state) => state.cart);

  return (
    <header style={{zIndex:'1000'}} className="fixed w-full  flex justify-between px-4 md:px-0 md:justify-around items-center shadow-lg py-2 bg-[#eee]">
      {/* this section is left logo */}
      <div className="flex flex-col items-center text-center">
        <img src={logo} alt="logo" className=" w-8/12 " />
        <p className="md:text-lg text-sm font-bold w-full">Tasty Treat</p>
      </div>
      {/* middle section */}
      <div className="w-9/12 flex justify-center  ">
      <div
        onClick={() => setActive(true)}
        className={`   w-8/12 ${
          active ? "md:block hidden" : "menu"
        } `}
      >
        <div className={`${active ? "md:block hidden" : "navigation"}`}>
          {items.map((item) => (
            <NavLink
              key={item.display}
              onClick={() => {
                setActive(true);
              }}
              to={item.to}
              className={(active) =>
                active.isActive
                  ? "font-bold text-orange-600  mt-4 md:mt-0 text-lg bg-orange-200 md:bg-white rounded py-2 px-4"
                  : "text-slate-900 hover:text-orange-600 font-bold   mt-4 md:mt-0 text-lg py-2 px-4"
              }
            >
              {item.display}
            </NavLink>
          ))}
        </div>
      </div>
      </div>
      {/* right section of navigation */}
      <div className="flex text-slate-900 gap-8 lg:gap-12 mr-4">
        <Link
          className="flex  relative"
          onClick={() => setActiveCart(!activeCart)}
        >
          <FaShoppingCart className="text-xl"/>
          <span className="cart-span text-orange-600 font-bold text-sm inline-block py-4">{cart.length}</span>
        </Link>


        <Link className="mr-2" to="/login">
          <FaUserPlus  className="text-xl"/>
        </Link>
        <span className="md:hidden" onClick={() => setActive(!active)}>
          <FaBars  className="text-xl"/>
        </span>
      </div>
    </header>
  );
};

export default Header;
