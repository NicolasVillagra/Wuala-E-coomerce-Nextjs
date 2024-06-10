import React from 'react'
import Image from 'next/image'
import { libreBaskerville } from '@/ui/fonts'

const Header = () => {
  return (
    <div className='relative w-full h-[400px] sm:h-[600px]'>
      <Image src="/header.jpg" alt="Screen" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
        {/* Texto */}
        <div className='flex flex-col items-center gap-6 sm:gap-10 px-4'>
          <div className="text-center text-black">
            <p className="text-2xl sm:text-6xl">Taste Authentic Argentine</p>
            <p className="text-2xl sm:text-6xl">Cuisine</p>
          </div>
          <div className={`${libreBaskerville.className} text-center text-black`}>
            <p className="text-lg sm:text-2xl">Enjoy traditional dishes made with fresh ingredients in the heart of</p>
            <p className="text-lg sm:text-2xl">Argentina</p>
          </div>
          <div className={`${libreBaskerville.className} flex flex-col sm:flex-row gap-4 sm:gap-10`}>
            <button
              className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 sm:py-3 px-4 sm:px-6 text-center align-middle text-xs sm:text-sm uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Reserve Now
            </button>
            <button
              className="select-none rounded-lg border border-gray-900 py-2 sm:py-3 px-4 sm:px-6 text-center align-middle text-xs sm:text-sm uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
