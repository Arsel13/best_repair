import React from "react";
import { useLocation } from "react-router-dom";

export default function HeroSection(props) {
  const location = useLocation().pathname;
  return (
    <div className="relative z-50">
      <div className="py-12 lg:py-24 w-11/12 lg:w-4/5 mx-auto">
        {location === "/" ? (
          <div className="max-w-lg mx-auto">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Breathing New Life to
            </h2>
            <h2 className="text-yellow-400 text-2xl md:text-3xl  font-bold">
              Broken Appliances
            </h2>
            <p className="text-white font-medium mt-4">
              Working with appliances for more than a decade, we found that
              getting the appliances repaired involved a lot of headache. We saw
              people being pushed to buy new products when they didn't need one
            </p>
            <button
              className="text-yellow-400 font-medium bg-black bg-opacity-70 py-2 px-4 rounded-md 
            uppercase hover:bg-yellow-400 hover:bg-opacity-70 hover:text-white duration-200 mt-4"
            >
              View More
            </button>
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
              {props.heroTitleOne}
            </h2>
            <h2 className="text-yellow-400 text-2xl md:text-3xl lg:text-4xl  font-bold">
              {props.heroTitleTwo}
            </h2>
          </div>
        )}
      </div>
      {location === "/" ? (
        <div
          className="bg-black bg-opacity-70 p-4 rounded-sm  flex xl:justify-between items-center 
         gap-4 flex-wrap border-t relative z-50"
        >
          <div className="w-11/12 lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div className="flex gap-x-3">
              <div
                className="border-2 border-yellow-400 text-yellow-400 text-xl p-4 rounded-full 
            w-10 h-10 flex justify-center items-center"
              >
                1
              </div>
              <div className="">
                <h2 className="text-yellow-400 uppercase">Commercial</h2>
                <p className="text-white text-sm">
                  We specialize in services that you require on everyday basis
                </p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div
                className="border-2 border-yellow-400 text-yellow-400 text-xl rounded-full 
            w-10 h-10 flex justify-center items-center p-4"
              >
                2
              </div>
              <div className="">
                <h2 className="text-yellow-400 uppercase">Residential</h2>
                <p className="text-white text-sm">
                  We specialize in services that you require on everyday basis
                </p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div
                className="border-2 border-yellow-400 text-yellow-400 text-xl rounded-full 
              w-10 h-10 flex justify-center items-center p-4"
              >
                3
              </div>
              <div className="">
                <h2 className="text-yellow-400 uppercase">24/7 Support</h2>
                <p className="text-white text-sm">
                  We specialize in services that you require on everyday basis
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
