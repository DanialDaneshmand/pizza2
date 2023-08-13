import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

function TestImonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpped: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          suscipit ad non laborum sit. Voluptate!adipisicing elit. Magnam
          suscipit ad non laborum sit. Voluptate!
        </p>
        <div className="mt-8 flex gap-2 items-center">
          <img src={ava01} alt="" className="w-16  rounded" />
          <span className="font-bold">danial daneshmand</span>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          suscipit ad non laborum sit. Voluptate!adipisicing elit. Magnam
          suscipit ad non laborum sit. Voluptate!
        </p>
        <div className="mt-8 flex gap-2 items-center">
          <img src={ava02} alt="" className="w-16  rounded" />
          <span className="font-bold">zahra mahmoudi</span>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          suscipit ad non laborum sit. Voluptate!adipisicing elit. Magnam
          suscipit ad non laborum sit. Voluptate!
        </p>
        <div className="mt-8 flex gap-2 items-center">
          <img src={ava03} alt="" className="w-16  rounded" />
          <span className="font-bold">danial daneshmand</span>
        </div>
      </div>
    </Slider>
  );
}

export default TestImonialSlider;
