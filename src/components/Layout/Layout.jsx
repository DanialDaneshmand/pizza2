import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routes";
import Cart from "../Cart/Cart";

function Layout() {
  const [activeCart,setActiveCart]=useState(false)
  return (
    <div>
      <Header setActiveCart={setActiveCart} activeCart={activeCart}/>
      <Cart activeCart={activeCart} setActiveCart={setActiveCart}/>
      <Routes />
      <Footer />
    </div>
  );
}

export default Layout;
