import React from 'react'
import StarRating from './StarRating'
import "./card.css"

function ProductCard() {
  return (
    <div className='product-card p-1 border-1 border-gray-400 h-80 rounded-lg shadow-md shadow-gray-300'>
        <div className='card relative'>
            <div className='absolute flex w-full justify-between px-3 mt-2'>
                <div className='w-3/4 flex justify-start gap-1'>
                    <span className='bg-white w-8 flex flex-row justify-center items-center rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </span>
                    <span className='text-white bg-rose-500 px-2 py-1 rounded-md'>تخفیف تا 15%</span>
                </div>
                <div className='w-1/4 flex justify-end cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
            </div>
            <div className='rounded-lg overflow-hidden'>
                <img src='/1.png' />
            </div>
        </div>
        <div className='my-2 px-3 text-start'>
            <h3 className='font-bold text-xl'>تم پارک آبی</h3>
            <p className='text-gray-500'>کیش،جاده جهان</p>
        </div>
        <div className='flex justify-between items-center px-3'>
            <div>
                <StarRating/>
            </div>
            <div>
                <p className='text-blue-400'>شروع قیمت از</p>
                <p className='text-blue-400 font-bold text-start'>400,000ت</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard