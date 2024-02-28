import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Brands from "../../Components/Brands";
import CustomerSays from "../../Components/CustomerSays";

export default function Home() {
  return (
    <>
      <Header heroBg="bg-headerBg" bgHeight="h-full" />

      <div className="w-11/12 lg:w-4/5 mx-auto py-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-9">
          <div>
            <img
              src="/images/services.webp"
              alt="best-services"
              className="w-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-6 justify-center">
            <h2 className="text-gray-500 text-2xl lg:text-3xl uppercase font-medium">
              Need an Appliance Repair or installed? We Provide Fast And
              Reliable Service at Best Price
            </h2>
            <div className="w-20 h-1 bg-yellow-400"></div>
            <p className="text-gray-500">
              Our team at Best Repairs understand the urgency and importance of
              the Job. We will get your appliances up and running in no time.
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative bg-emergencyCall bg-no-repeat bg-fixed bg-cover w-full h-[250px] after:absolute after:top-0 after:left-0 after:bg-black after:bg-opacity-70 after:w-full 
      after:h-[250px]"
      >
        <div className="w-11/12 lg:w-4/5 mx-auto flex justify-center items-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 relative z-50">
            <div className="text-white space-y-3">
              <h2 className="text-2xl lg:text-3xl font-medium">
                24 / 7 Emergency Call : 02 8322 1000
              </h2>
              <p className="">
                We are Australia's Leading Appliance Specialists ready to
                install and repair any electric, gas or water appliance you have
              </p>
            </div>

            <div className="flex justify-center">
              <button
                className="text-yellow-400 font-medium bg-black bg-opacity-70 py-2 px-4 rounded-md 
            uppercase hover:bg-yellow-400 hover:bg-opacity-70 hover:text-white duration-200"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EDEDED] py-10 lg:py-20">
        <div className="flex flex-col justify-center items-center gap-6 w-11/12 lg:w-4/5 mx-auto">
          <div>
            <img
              src="/images/payment.webp"
              alt="payment"
              className="object-contain"
            />
          </div>

          <div className="max-w-[620px] mx-auto text-center space-y-6">
            <h2 className="text-gray-500 text-2xl lg:text-3xl font-medium uppercase">
              Payments and Invoices
            </h2>
            <p className="text-gray-500">
              Your convenience is our top priority even when it comes to
              payments. We partner with square for efficient and smooth payments
              and invoices experience. Just a tap is enough to pay and get the
              invoice.
            </p>
          </div>
          <div>
            <img src="/images/paycards.webp" alt="cards" />
          </div>
        </div>
      </div>

      <div
        className="relative bg-headerBg bg-no-repeat bg-fixed bg-cover w-full h-[500px] md:h-[400px] after:absolute after:top-0 after:left-0 after:bg-black after:bg-opacity-70 after:w-full 
      after:h-[500px] md:after:h-[400px]"
      >
        <div className="w-11/12 lg:w-4/5 mx-auto flex justify-center items-center h-full">
          <div className="relative z-50">
            <div className="text-white text-center space-y-3">
              <h2 className="max-w-[850px] mx-auto">
                Don't wait for a complete breakdown for help. If you notice a
                change in appliance performance or simply want to replace any
                old appliance, contact Best Repairs for a quote or to schedule
                an in-home consultation today. We look forward to providing you
                with the solutions you need to
              </h2>
              <p className="lg:text-5xl text-4xl uppercase">
                Keep your Home Appliances
              </p>
              <p className="text-3xl lg:text-4xl text-yellow-400 uppercase">
                Running Smoothly!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Brands />
      <CustomerSays />
      <Footer />
    </>
  );
}
