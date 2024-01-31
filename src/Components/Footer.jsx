// @ts-nocheck
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaPinterest } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-yellow-400 pt-10 lg:pt-20 pb-10">
      <div className=" w-4/5 m-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-white">Logo</h2>
            </div>
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora molestiae eum iste, tenetur possimus assumenda totam
              </p>
            </div>
            <div className="gap-5 flex [&>div]:border [&>div]:border-white [&>div]:w-8 [&>div]:h-8 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:rounded-full">
              <div>
                <FaTwitter size={16} className="text-xl text-white" />
              </div>
              <div>
                <FaFacebookF size={16} className="text-xl text-white" />
              </div>
              <div>
                <FaPinterest size={16} className="text-xl text-white" />
              </div>
              <div>
                <FaInstagram size={16} className="text-xl text-white" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-switzer font-bold">Services</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white font-switzer font-normal">
                Terms of Service
              </li>
              <li className="text-sm text-white font-switzer font-normal">
                3D Model License
              </li>
              <li className="text-sm text-white font-switzer font-normal">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-switzer font-bold">Latest Work</h4>
            <div className="flex flex-wrap gap-2">
              <div>
                <img
                  className="h-12"
                  src="https://www.shutterstock.com/shutterstock/photos/1793842378/display_1500/stock-photo-top-view-of-male-worker-in-uniform-that-repairs-red-automobile-1793842378.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-12"
                  src="https://www.shutterstock.com/shutterstock/photos/1793842378/display_1500/stock-photo-top-view-of-male-worker-in-uniform-that-repairs-red-automobile-1793842378.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-12"
                  src="https://www.shutterstock.com/shutterstock/photos/1793842378/display_1500/stock-photo-top-view-of-male-worker-in-uniform-that-repairs-red-automobile-1793842378.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-12"
                  src="https://www.shutterstock.com/shutterstock/photos/1793842378/display_1500/stock-photo-top-view-of-male-worker-in-uniform-that-repairs-red-automobile-1793842378.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-12"
                  src="https://www.shutterstock.com/shutterstock/photos/1793842378/display_1500/stock-photo-top-view-of-male-worker-in-uniform-that-repairs-red-automobile-1793842378.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-12"
                  src="https://www.shutterstock.com/shutterstock/photos/1793842378/display_1500/stock-photo-top-view-of-male-worker-in-uniform-that-repairs-red-automobile-1793842378.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-switzer font-bold">News Letter</h4>
            <div className="flex flex-col gap-5">
              <input type="text" />
              <label className="text-white" htmlFor="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                provident, sapiente :
              </label>
            </div>
          </div>
        </div>

        <div className="w-1/2 mx-auto my-20">
          <div className="flex justify-between items-center ">
            <div>
              <FaTwitter className="text-xl text-white" />
            </div>
           
          </div>
        </div>

        <div className="flex justify-center mt-4 text-white">
          © TurboSquid 2023
        </div>
      </div>
    </footer>
  );
}
