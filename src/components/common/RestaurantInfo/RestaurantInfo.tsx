import { libreBaskerville } from '@/ui/fonts'
import React from 'react'

const RestaurantInfo = () => {
  return (
    <div className='w-full p-6 sm:p-10 gap-8 sm:gap-11 mt-2 flex flex-col'>
      <h1 className='text-black text-3xl sm:text-5xl font-extrabold'>Exceptional Dining Stats to Impress You</h1>
      <div className='flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-8 justify-center'>
        <div className='flex flex-col gap-3 sm:gap-5 w-full sm:w-[300px]'>
          <h1 className="text-black text-xl sm:text-2xl font-semibold">5 Stars</h1>
          <h2 className={`${libreBaskerville.className} text-black font-light`}>Rated 5 stars by our satisfied <br className="hidden sm:block"/> customers.</h2>
        </div>
        <div className='flex flex-col gap-3 sm:gap-5 w-full sm:w-[300px]'>
          <h1 className="text-black text-xl sm:text-2xl font-semibold">100+ Dishes</h1>
          <h2 className={`${libreBaskerville.className} text-black font-light`}>Enjoy a diverse menu with over <br className="hidden sm:block"/> 100 dishes.</h2>
        </div>
        <div className='flex flex-col gap-3 sm:gap-5 w-full sm:w-[300px]'>
          <h1 className="text-black text-xl sm:text-2xl font-semibold">Local Ingredients</h1>
          <h2 className={`${libreBaskerville.className} text-black font-light`}>We use fresh, local ingredients in <br className="hidden sm:block"/> every dish.</h2>
        </div>
        <div className='flex flex-col gap-3 sm:gap-5 w-full sm:w-[300px]'>
          <h1 className="text-black text-xl sm:text-2xl font-semibold">10 Years</h1>
          <h2 className={`${libreBaskerville.className} text-black font-light`}>Serving delicious meals for over <br className="hidden sm:block"/> 10 years.</h2>
        </div>
      </div>
    </div>
  )
}

export default RestaurantInfo
