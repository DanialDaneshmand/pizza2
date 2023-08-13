import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import whyImg from "../../assets/images/location.png";

function WhyTastyComp() {
  return (
    <div className="grid  md:grid-cols-2">
      <div>
        <img src={whyImg} alt="why-tasty-treat" className="w-9/12 md:w-full" />
      </div>
      <div className="flex flex-col justify-center px-16 md:pl-0">
        <p className="text-2xl font-bold mb-2">
          Why <span className="text-orange-600">Tasty Treat ?</span>
        </p>
        <p className="mb-12 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima
          expedita aut officia soluta, accusantium doloremque dicta, consectetur
          nulla debitis!
        </p>
        <p className="mb-4">
          <p className="flex gap-1  items-center font-bold mb-2">
            <FaRegCheckCircle className="text-orange-600" />
            <span>Fresh and tasty foods</span>
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
            libero.
          </p>
        </p>
        <p className="mb-4">
          <p className="flex gap-1  items-center font-bold mb-2">
            <FaRegCheckCircle className="text-orange-600" />
            <span>Qulity support</span>
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
            libero.
          </p>
        </p>
        <p className="mb-4">
          <p className="flex gap-1  items-center font-bold mb-2">
            <FaRegCheckCircle className="text-orange-600" />
            <span>Order from any location</span>
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
            libero.
          </p>
        </p>
      </div>
    </div>
  );
}

export default WhyTastyComp;
