import React from "react";

export default function CustomerCard() {
  return (
    <div className="bg-black bg-opacity-70 border rounded-lg relative mt-20 max-w-3xl mx-auto">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <img
          src="/images/customer.webp"
          alt="customer-say"
          className="w-20 h-20 rounded-full"
        />
      </div>

      <div className="pt-10 pb-8 lg:pt-20 lg:pb-14 px-5 lg:px-10 text-center space-y-5">
        <h2 className="text-white text-lg">
          Best Repairs is the friendliest and most efficient company I have ever
          used. The whole thing takes time to introduce the product and as a
          result puts forward only the best opportunities that really suit you,
          they help from start to finish to create a great product identity for
          your company
        </h2>
        <p className="text-yellow-400">Shalima Hayden</p>
        <span className="text-yellow-400">(Sydney)</span>
      </div>
    </div>
  );
}
