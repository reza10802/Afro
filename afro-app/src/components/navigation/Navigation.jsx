"use client";
import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Navigation.css';
import ProductCard from '../ProductCard/ProductCard';

export default function App() {
  // Create array with 500 slides
  return (
    <div className='flex justify-between item-center relative'>
      <div className=' w-1/3 flex flex-col justify-center gap-2 items-start'>
          <div className='flex flex-col gap-3 text-center w-11/12'>
              <p className='text-right text-rose-500'>تخفیف های ویژه ارزان تر از گیشه</p>
              <h2 className='font-semibold text-4xl text-sky-950 text-right'>پول تیکت، رزرو آنلاین بلیتِ اتسخر، پارک آبی و سلامتکده </h2>
          </div>
          <div className=''>
              <span className='text-blue-950 h-8 border-b-2 border-blue-950'>مشاهده همه</span>
          </div>
      </div>
      <div className='w-2/3'>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
        >
          <SwiperSlide data-hash="slide1"><ProductCard/></SwiperSlide>
          <SwiperSlide data-hash="slide2"><ProductCard/></SwiperSlide>
          <SwiperSlide data-hash="slide3"><ProductCard/></SwiperSlide>
          <SwiperSlide data-hash="slide4"><ProductCard/></SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-button-prev"></div>
    </div>
  );
}
