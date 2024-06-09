import { libreBaskerville } from '@/ui/fonts'
import React from 'react'

const FoodType = () => {
    // Icons
    const Coffee02Icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={60} height={60} color={"#000000"} fill={"none"}>
    <path d="M18.2505 10.5H19.6403C21.4918 10.5 22.0421 10.7655 21.9975 12.0838C21.9237 14.2674 20.939 16.8047 17 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M5.94627 20.6145C2.57185 18.02 2.07468 14.3401 2.00143 10.5001C1.96979 8.8413 2.45126 8.5 4.65919 8.5H15.3408C17.5487 8.5 18.0302 8.8413 17.9986 10.5001C17.9253 14.3401 17.4281 18.02 14.0537 20.6145C13.0934 21.3528 12.2831 21.5 10.9194 21.5H9.08064C7.71686 21.5 6.90658 21.3528 5.94627 20.6145Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11.3089 2.5C10.7622 2.83861 10.0012 4 10.0012 5.5M7.53971 4C7.53971 4 7 4.5 7 5.5M14.0012 4C13.7279 4.1693 13.5 5 13.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const SpoonAndKnifeIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={60} height={60} color={"#000000"} fill={"none"}>
<path d="M6.5 17.3306C7.78183 18.9563 9.76903 20 12 20C13.9587 20 15.7295 19.1955 17 17.8989M8.5 6.93647C9.52961 6.34088 10.725 6 12 6C13.9587 6 15.7295 6.80446 17 8.10101" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
<path d="M16 13C16 15.2091 14.2091 17 12 17C9.79085 17 8 15.2091 8 13C8 10.7909 9.79085 9 12 9C14.2091 9 16 10.7909 16 13Z" stroke="currentColor" strokeWidth="1.5" />
<path d="M6 7C6 8.38067 5.10457 9 4 9C2.89543 9 2 8.38067 2 7C2 5.61928 2.89543 4 4 4C5.10457 4 6 5.61928 6 7Z" stroke="currentColor" strokeWidth="1.5" />
<path d="M19.5 13V4H20C21.1046 4 22 4.89543 22 6V13H19.5ZM19.5 13V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
<path d="M4 9V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const SpoonAndForkIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={60} height={60} color={"#000000"} fill={"none"}>
<path d="M18.4998 3.00195L15.0604 6.44129C14.4746 7.02708 14.4746 7.97683 15.0604 8.56261L15.7498 9.25195M21.9998 6.50195L18.5604 9.94129C17.9746 10.5271 17.0249 10.5271 16.4391 9.94129L15.7498 9.25195M15.7498 9.25195L3.99976 21.002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
<path d="M20 4.99902L17.5 7.49902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
<path d="M7.98914 8.99011C6.79472 10.1845 5.15674 10.4831 3.66377 8.99011C2.17075 7.49709 1.38801 4.77783 2.58243 3.58341C3.77685 2.38899 6.49611 3.17172 7.98914 4.66475C9.48211 6.15772 9.18356 7.79569 7.98914 8.99011ZM7.98914 8.99011L20 21.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
<path d="M9.20542 2.39669C10.0923 2.13908 11.03 2.00098 12 2.00098C13.1517 2.00098 14.2579 2.19567 15.2876 2.55394M2.04937 11.001C2.01672 11.3299 2 11.6635 2 12.001C2 14.0328 2.60598 15.9231 3.64707 17.501M7.77267 21.0661C9.05671 21.6659 10.4892 22.001 12 22.001C13.5244 22.001 14.9691 21.6599 16.262 21.0499M20.3529 17.501C21.394 15.9231 22 14.0328 22 12.001C22 11.4228 21.9509 10.8561 21.8567 10.3048" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>
    

  return (
    <div className='w-full sm:h-full flex flex-col p-10 gap-11 mt-2'>
        <h1 className='text-black text-5xl font-extrabold'>Core packages</h1>
        <div className='flex gap-10'>
            <div className='flex flex-col gap-10'>
                {Coffee02Icon}
                <div className='flex flex-col gap-2'>
                <h1 className='text-black text-2xl font-extrabold'>Gourmet Breakfast Service</h1>
                <h2 className={`${libreBaskerville.className} text-black`}>Enjoy a selection of freshly prepared breakfast <br /> dishes, perfect for starting your day off right.</h2>
                </div>
            </div>

            <div className='flex flex-col gap-10'>
                {SpoonAndKnifeIcon}
                <div className='flex flex-col gap-2'>
                <h1 className='text-black text-2xl font-extrabold'>Lunch Specials</h1>
                <h2 className={`${libreBaskerville.className} text-black`}>Delicious and affordable lunch options that <br /> are designed to give you a satisfying break.</h2>
                </div>
            </div>

            <div className='flex flex-col gap-10'>
                {SpoonAndForkIcon}
                <div className='flex flex-col gap-2'>
                <h1 className='text-black text-2xl font-extrabold'>Dinner Delights</h1>
                <h2 className={`${libreBaskerville.className} text-black`}>Savor our expertly crafted dinner menu, ideal <br /> for both casual and special evenings.</h2>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FoodType