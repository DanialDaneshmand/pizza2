import React from "react";
import bg from "../../assets/images/bg.jpg";

function HeaderTitle({ title }) {
  return (
    <>
      <div className="w-full h-[400px] relative" style={{ overflow: "hidden" }}>
        <img
          src={bg}
          alt="pizza"
          className="h-full w-full md:w-auto md:h-auto"
        />
        <div className="w-full h-[400px] title__container  "></div>
      </div>
      <div className="text-center title">
        <p className="lg:text-4xl sm:text-2xl text-xl">{title}</p>
      </div>
    </>
  );
}

export default HeaderTitle;
