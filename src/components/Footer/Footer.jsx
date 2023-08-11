import React from "react";
import logo from "../../assets/images/res-logo.png";
import { FaPaperPlane } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-orange-200 ">
      <div className=" gap-16 lg:gap-0 w-full  grid lg:grid-cols-4 md:grid-cols-2  py-8 px-16">
        <div className="text-slate-900">
          <img src={logo} alt="logo" className="w-20" />
          <p className="font-bold">Tasty Treat</p>
          <p className="text-gray-600" style={{ maxWidth: "220px" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
            veniam!
          </p>
        </div>
        <div className="text-slate-900">
          <p className="text-xl font-bold">Delivery Time</p>
          <p className=" font-bold mt-4">Sunday-Thursday</p>
          <p className="text-sm text-gray-600">10:00am-11:00pm</p>
          <p className=" font-bold mt-8">Friday-saturday</p>
          <p className="text-sm text-gray-600">Off Day</p>
        </div>
        <div className="text-slate-900">
          <p className="text-xl font-bold">Contact</p>
          <p className="text-sm text-gray-600 mt-4">
            Location :shiraz.atlasi.abiramiz-13
          </p>
          <p className="font-bold mt-8">Phone:09392923907</p>
          <p className="font-bold mt-2">Email:exmple@gmail.com</p>
        </div>
        <div className="text-slate-900">
          <p className="text-xl font-bold">Newsletter</p>
          <p className="text-sm text-gray-600 mt-2">subscribe our newsletter</p>
          <div className="flex items-center mt-6">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-orange-200 py-2 px-3 border border-slate-900 rounded-md"
            />
            <span className="send__icon rounded bg-orange-600 inline-block py-2 px-4 text-white">
              <FaPaperPlane />
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 py-4">
        <span className="text-slate-900 font-bold"> follow :</span>
        <FaWhatsappSquare className="ml-3 text-xl text-orange-600 " />
        <FaTelegram className="ml-3 text-xl text-orange-600 " />
        <FaGithub className="ml-3 text-xl text-orange-600 " />
        <FaLinkedin className="ml-3 text-xl text-orange-600 " />
      </div>
    </footer>
  );
}

export default Footer;
