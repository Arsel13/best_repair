import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { RiMenuFill } from "react-icons/ri";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
export default function Header(props) {
  const [menu, setMenu] = useState(false);
  return (
    <header
      className={`relative ${props.heroBg} bg-no-repeat bg-center bg-cover w-full ${props.bgHeight}
        after:absolute after:bg-black after:bg-opacity-60 after:top-0 after:left-0 after:w-full 
        after:${props.bgHeight}`}
    >
      <div className="w-11/12 lg:w-3/4 mx-auto relative z-50">
        <div className="flex justify-between items-center py-2 lg:py-4">
          <Link to="/">
            <img src="/images/logo.webp" alt="logo" className="w-20 h-16" />
          </Link>

          <div className="hidden lg:flex gap-x-5 md:gap-x-10">
            <div className="flex gap-x-3">
              <div className="border-2 border-yellow-400 text-yellow-400 text-xl rounded-full p-2">
                <FiPhone />
              </div>
              <div className="text-white text-sm font-medium">
                <h2>Call Us Anytime</h2>
                <p>02 8322 1000</p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="border-2 border-yellow-400 text-yellow-400 text-xl rounded-full p-2">
                <FaRegEnvelope />
              </div>
              <div className="text-white text-sm font-medium">
                <h2>Email Us</h2>
                <p>contact@bestrepairs.com.au</p>
              </div>
            </div>

            <button
              className="text-yellow-400 font-medium bg-black bg-opacity-70 py-2 px-4 rounded-md 
            uppercase hover:bg-yellow-400 hover:bg-opacity-70 hover:text-white duration-200"
            >
              Get a Quote
            </button>
          </div>

          <button
            className="text-yellow-400 text-2xl font-semibold border-2 border-yellow-400 p-1 
          rounded-md hover:bg-yellow-400 hover:text-white duration-200 block lg:hidden"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <RiMenuFill />
          </button>
        </div>

        <Navbar menu={menu} />
      </div>

      <HeroSection
        heroTitleOne={props.heroTitleOne}
        heroTitleTwo={props.heroTitleTwo}
        textCenter={props.textCenter}
      />
    </header>
  );
}
