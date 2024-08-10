import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="w-full sm:h-full flex flex-col p-6 sm:p-10 gap-8 sm:gap-11 mt-6 sm:mt-10">
      <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center sm:text-left">
        Discover Authentic Argentine <br className="hidden sm:block" /> Cuisine at Wuala
      </h1>
      <h2 className="text-black text-lg sm:text-xl md:text-2xl font-semibold sm:font-extrabold text-center sm:text-left">
        Experience the rich flavors of Argentina at Wuala. Located in the heart of 
        <br className="hidden md:block" /> Argentina, our restaurant offers traditional dishes made with fresh ingredients. 
        <br className="hidden md:block" /> Join us for a memorable dining experience.
      </h2>
      <div className="flex items-center justify-center sm:justify-start">
        <Image 
          className="w-full h-auto rounded-2xl sm:rounded-3xl object-cover" 
          src="/hero_food.jpg" 
          alt="food hero" 
          width={1400} 
          height={600} 
        />
      </div>
    </div>
  )
}

export default Hero
