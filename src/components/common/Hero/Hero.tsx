import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <div className="w-full sm:h-full flex flex-col p-10 gap-11 mt-10">
        <h1 className="text-black text-7xl font-extrabold">Discover Authentic Argentine <br /> Cuisine at Wuala</h1>
        <h2 className="text-black text-2xl font-extrabold">Experience the rich flavors of Argentina at Wuala. Located in the heart of <br /> Argentina, our restaurant offers traditional dishes made with fresh ingredients. <br /> Join us for a memorable dining experience.</h2>
        <div className='flex items-center justify-center'>
          <Image className="h-[600px] w-full rounded-3xl" src="/hero_food.jpg" alt="food hero" width={1400} height={220}/>
        </div>
    </div>
  )
}

export default Hero