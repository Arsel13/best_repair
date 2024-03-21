import React from "react";

export default function Brands() {
  return (
    <div className="bg-[#EDEDED] py-10 lg:py-20">
      <div className="w-11/12 lg:w-4/5 mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-2xl text-center lg:text-3xl text-gray-400 font-medium uppercase">
            Brands We Service / Install
          </h2>
          <div className="bg-yellow-400 w-28 h-1"></div>
        </div>
        <div className="pt-10">
          <div className="bg-white grid grid-cols-2 md:grid-cols-4">
            <div className="p-5 border-b border-r flex justify-center">
              <img src="/images/haier.webp" alt="haier" />
            </div>
            <div className="p-5 border-b border-r flex justify-center">
              <img src="/images/lg.webp" alt="lg" />
            </div>
            <div className="p-5 border-b border-r flex justify-center">
              <img src="/images/samsung.webp" alt="samsung" />
            </div>
            <div className="p-5 border-b border-r flex justify-center">
              <img src="/images/blanco.webp" alt="blanco" />
            </div>
            <div className="p-5 border-b border-r flex justify-center">
              <img src="/images/haier.webp" alt="haier" />
            </div>
            <div className="p-5 border-b border-r flex justify-center">
              <img src="/images/lg.webp" alt="lg" />
            </div>
            <div className="p-5 border-b border-r flex justify-center">
              <img src="/images/samsung.webp" alt="samsung" />
            </div>
            <div className="p-5 border-b border-r flex justify-center">
              <img src="/images/blanco.webp" alt="blanco" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
