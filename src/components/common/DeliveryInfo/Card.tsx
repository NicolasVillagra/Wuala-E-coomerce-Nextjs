import Image from 'next/image'
import React from 'react'
interface Card {
    image:string,
    text:string
}
const Card = ({image , text}: Card) => {
  return (
    <div
  className="relative grid h-[20rem] w-full max-w-[18rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-black bg-clip-border text-center text-gray-700">
  <img
  src={image}
  alt='image'
    className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-black  bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
   
  </img>
  <div className="relative bg-black bg-opacity-50 w-full h-[20rem] p-6 px-6 py-14 md:px-12">
    <h2 className="mb-6 block text-center font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      {text}
    </h2>
  </div>
</div>  
  )
}

export default Card