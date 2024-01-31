import React from "react";
import Header from "../../Components/Header";
import Brands from "../../Components/Brands";
import { GoStarFill } from "react-icons/go";

export default function AboutUs() {
  return (
    <>
      <Header
        heroBg="bg-aboutBg"
        bgHeight="h-screen"
        heroTitleOne="From the Oven to the Dishwasher,"
        heroTitleTwo="We've Got You Covered!"
      />

      <div className="py-10 lg:py-20">
        <div className="w-11/12 lg:w-10/12 mx-auto relative z-50">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl text-center lg:text-3xl text-gray-400 font-medium uppercase">
              Our Mission and Promise
            </h2>
            <div className="bg-yellow-400 w-28 h-1 mt-4"></div>

            <div>
              <img
                src="/images/about/our-mission.webp"
                alt="our-mission"
                className="w-96 h-72"
              />
            </div>

            <div className="space-y-6">
              <h2 className="max-w-4xl mx-auto  text-gray-400 text-center">
                Best Repairs is not your regular service company, we are 24/7,
                dedicated same day service that consistently aims to exceed our
                customers expactations. We are committed to delivering service
                on time , and we mean what we say - whether it's small or large
                job, you can be guaranteed of our quality, reliabilty and
                professionalism.
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4">
                <div className="border p-4 flex flex-col justify-center items-center">
                    <img src="/images/about/quick.webp" alt="quick" className="w-16 h-16"/>
                    <p className="text-gray-500">Quick</p>
                </div>
                <div className="border p-4 flex flex-col justify-center items-center">
                    <img src="/images/about/warranty.webp" alt="warranty" className="w-16 h-16"/>
                    <p className="text-gray-500">Warranty with all jobs</p>
                </div>
                <div className="border p-4 flex flex-col justify-center items-center">
                    <img src="/images/about/price.webp" alt="price" className="w-16 h-16"/>
                    <p className="text-gray-500">Best Price</p>
                </div>
                <div className="border flex flex-col justify-center items-center p-4">
                    <img src="/images/about/house.webp" alt="quihouseck" className="w-16 h-16"/>
                    <p className="text-gray-500">Hassle free service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-headerBg bg-no-repeat bg-cover w-full h-full after:absolute after:top-0 
        after:left-0 after:bg-black after:bg-opacity-70 after:w-full after:h-full py-10 lg:py-20"
      >
        <div className="w-11/12 lg:w-10/12 mx-auto relative z-50">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-2xl text-center lg:text-3xl text-white font-medium uppercase">
              Our Story
            </h2>
            <div className="bg-yellow-400 w-28 h-1"></div>

            <div className="text-white text-center pt-5 space-y-10">
              <h2 className="max-w-[850px] mx-auto">
                Working with appliances for more than a decade, we found that
                the getting appliances repaired involved a lot of headache. We
                saw people being pushed to buy new products when they didn't
                need one
              </h2>

              <div>
                <p className="lg:text-3xl text-2xl uppercase text-white">
                  We want to bring up the standard in the
                </p>
                <p className="lg:text-3xl text-2xl text-yellow-400 uppercase">
                  Repairs and Installation industry
                </p>
                <p className="lg:text-3xl text-2xl text-white uppercase">
                  Around home appliances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 py-10 lg:py-20">
        <div className="w-11/12 lg:w-10/12 mx-auto relative z-50">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-2xl text-center lg:text-3xl text-white font-medium uppercase">
              Our Vibe
            </h2>
            <div className="bg-white w-28 h-1"></div>

            <div className="space-y-6">
              <h2 className="max-w-xl mx-auto text-lg text-white text-center">
                We are a company with high spirit and a lot of enthusiasm.
                Thriving on positive feedback, we wil provide you with a 5 star
                service.
              </h2>

              <div className="flex justify-center items-center gap-2">
                <GoStarFill color="white" size={24} />
                <GoStarFill color="white" size={24} />
                <GoStarFill color="white" size={24} />
                <GoStarFill color="white" size={24} />
                <GoStarFill color="white" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Brands />
    </>
  );
}
