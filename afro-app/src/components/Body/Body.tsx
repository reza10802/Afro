import React from 'react'
import SlideerShow from '../sliderShow/SlideerShow'
import '../component.css'
import ProductCard from '../ProductCard/ProductCard'
import NavigationSlider from '../navigation/Navigation'


function BodyFirstSection() {
  return (
  <>
    <div className='flex flex-row relative mb-20'>
        <div className='flex-1/3 m-auto'>
            <div className='flex flex-col gap-3 text-center w-9/12 m-auto'>
                <p className='text-right text-rose-500'>تخفیف های ویژه ارزان تر از گیشه</p>
                <h2 className='font-semibold text-4xl text-sky-950 text-right'>پول تیکت، رزرو آنلاین بلیتِ اتسخر، پارک آبی و سلامتکده </h2>
                <div className='flex justify-center items-center gap-3 mt-3'>
                    <button className='flex bg-blue-400 to-blue-400 border-2 border-blue-400 w-1/2 py-3 px-1 rounded-lg justify-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <span className='text-white'>رزرو بلیت</span>
                    </button>
                    <button className='flex bg-white border-2 border-blue-400 w-1/2 py-3 px-1 rounded-lg justify-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5CBFFF" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>
                        <span className='text-blue-400'>ویدئو معرفی</span>
                    </button>
                </div>
            </div>
        </div>
        <div className='flex-2/3'>
            <div className='sliderHolder relative'>
                <SlideerShow/>
                <div className='sliderLowerContent flex flex-row justify-between'>
                    <div className="flex flex-row w-2/8 items-center justify-start gap-1">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <span>بدون نیاز به چاب کاغذی بلیت</span>
                    </div>
                    <div className="flex flex-row w-2/8 items-center justify-center gap-1">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <span>قابلیت کنسلی بلیت آنلاین</span>
                    </div>
                    <div className="flex flex-row w-2/8 items-center justify-end gap-1">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <span>تخفیف های ویژه ارزان تر از گیشه</span>
                    </div>
                    <div className="flex flex-row w-36 items-center justify-end gap-1">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <span>پشتیبانی 24 ساعته</span>
                    </div>
                </div>
                <div className='overlay absolute'></div>
            </div>
        </div>
    </div>
    <div className='flex justify-between'>
        <div className='text-start'>
            <h4 className='text-blue-950 text-3xl font-bold'>تخفیف های ویژه استخر و پارک های آبی</h4>
        </div>
        <div className='text-end'>
            <span className='text-blue-950 h-8 border-b-2 border-blue-950'>مشاهده همه</span>
        </div>
    </div>
    <div className='relative'>
        <div className='h-10 w-10 absolute prevSlide'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </span>
        </div>
        <div className='flex justify-between gap-4 mt-3 overflow-x-auto h-80'>

            <div className='flex gap-2 px-1 '>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
        <div className='h-10 w-10 absolute nextSlide'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </span>
        </div>
    </div>

    <div className='my-10'>
        <div className='flex justify-between mb-10 gap-5'>
            <div className='w-1/2'><img className='h-80 w-full object-cover rounded-3xl border-1 border-gray-200' src='/6.png' /></div>
            <div className='w-1/2'><img className='h-80 w-full object-cover rounded-3xl border-1 border-gray-200' src='/5.jpg' /></div>
        </div>
    </div>
    <hr/>
    <div className='my-10'>
        <div className='flex flex-row justify-between gap-2'>
            <div><img className='h-70 w-full rounded-3xl p-1 object-cover border-1 border-gray-200' src='/6.png' /></div>
            <div><img className='h-70 w-full rounded-3xl p-1 object-cover border-1 border-gray-200' src='/1.png' /></div>
            <div><img className='h-70 w-full rounded-3xl p-1 object-cover border-1 border-gray-200' src='/1.png' /></div>
            <div><img className='h-70 w-full rounded-3xl p-1 object-cover border-1 border-gray-200' src='/1.png' /></div>
        </div>
    </div>
    <div className='my-10'>
        <NavigationSlider />
    </div>

  </>
    
  )
}

export default BodyFirstSection