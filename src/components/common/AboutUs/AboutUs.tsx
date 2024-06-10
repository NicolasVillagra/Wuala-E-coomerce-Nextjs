import React from "react";
import Image from "next/image";
import { libreBaskerville } from "@/ui/fonts";

const AboutUs = () => {
  return (
    <div className="w-full p-6 sm:p-10 gap-8 sm:gap-11 mt-2 flex flex-col">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
        <div className="flex-shrink-0 w-full sm:w-[30rem] h-[20rem] sm:h-[30rem] relative">
          <Image className="rounded-xl object-cover" src='/header.jpg' alt="image aboutus" layout="fill" />
        </div>
        <div className="flex flex-col sm:p-8 gap-6 sm:gap-10">
          <h1 className="text-3xl sm:text-5xl text-black font-extrabold">About Us</h1>
          <div className="flex flex-col gap-6 sm:gap-10">
            <h2 className={`${libreBaskerville.className} text-lg sm:text-2xl text-black font-extrabold`}>
              We are a dedicated restaurant located in the heart of Argentina. Our mission is to provide quality food and a relaxed dining experience.
            </h2>
            <h2 className={`${libreBaskerville.className} text-lg sm:text-2xl text-black font-extrabold`}>
              Our team is passionate about serving delicious dishes made with fresh ingredients. We invite you to visit us and enjoy our welcoming atmosphere.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
