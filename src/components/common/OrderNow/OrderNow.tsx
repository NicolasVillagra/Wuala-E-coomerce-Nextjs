import Image from "next/image";
import React from "react";

const OrderNow = () => {
  return (
    <div className="w-full flex items-center justify-center sm:h-[500px] bg-[#F5D57D]">
      <div className="flex p-10 gap-10 items-center  justify-start">
        <div className="flex flex-col gap-10">
          <h1 className="text-black text-5xl font-extrabold">Order Food Now</h1>
          <h2 className="">
            Enjoy a variety of meals delivered straight to <br /> your door br. Fresh,
            tasty, and quick.
          </h2>
          <button
            className=" w-32 h-11 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-[#4C898A] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-xl"
            type="button"
          >
            Order Now
          </button>
        </div>
        <div>
            <Image className="w-96 h-96 rounded-xl" src="/hero-take.jpg" alt="menu iamge" width={1400} height={720}/>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
