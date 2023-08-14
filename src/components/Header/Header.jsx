import React, { useState } from "react";
import logo from "../../assets/images/res-logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const items = [
  { display: "خانه ", to: "/" },
  { display: "محصولات ", to: "/allFoods" },
  { display: "سبد خرید", to: "/cart" },
  { display: "تماس با ما", to: "/contact" },
];
const Header = ({ activeCart, setActiveCart }) => {
  const [active, setActive] = useState(true);
  const cart = useSelector((state) => state.cart);

  return (
    <header className="fixed w-full z-50 flex justify-between px-4 md:px-0 md:justify-around items-center shadow-lg py-2 bg-[#eee]">
      {/* this section is left logo */}
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" className="w-12" />
        <p className="text-l font-bold">Tasty Treat</p>
      </div>
      {/* middle section */}
      <div
        onClick={() => setActive(true)}
        className={`flex justify-between  md:w-5/12 lg:w-4/12 ${
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
                  ? "font-bold text-orange-600 mr-0 md:mr-4 mt-4 md:mt-0"
                  : "text-slate-900 hover:text-orange-600 font-bold  mr-0 md:mr-4 mt-4 md:mt-0"
              }
            >
              {item.display}
            </NavLink>
          ))}
        </div>
      </div>
      {/* right section of navigation */}
      <div className="flex text-slate-900 ">
        <Link
          className="flex mr-4 relative"
          to="/"
          onClick={() => setActiveCart(!activeCart)}
        >
          <FaShoppingCart />
          <span className="cart-span text-orange-600 font-bold text-sm inline-block py-4">{cart.length}</span>
        </Link>
        <Link className="mr-2" to="/login">
          <FaUserPlus />
        </Link>
        <span className="md:hidden" onClick={() => setActive(!active)}>
          <FaBars />
        </span>
      </div>
    </header>
  );
};

export default Header;
