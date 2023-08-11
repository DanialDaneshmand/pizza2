import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routes";

function Layout() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default Layout;
