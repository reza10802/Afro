"use client";
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Navigation.css';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';

export default function App() {
  const [data,setData]=useState([]);
  
  // Create array with 500 slides
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/hello");
        console.log(response);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  },[]);

  console.log(data)
  return (
    <div className='flex justify-between item-center relative'>
      <div className=' w-1/3 flex flex-col justify-center gap-2 items-start'>
          <div className='flex flex-col gap-3 text-center w-11/12'>
              <p className='text-right text-2xl text-sky-950 font-bold'>تخفیف های ویژه</p>
              <h2 className='text-4xl text-sky-950 text-right font-bold'>پول تیکت، رزرو آنلاین بلیتِ اتخر، پارک آبی و سلامتکده </h2>
              <p className='text-right text-xl text-gray-400 font-light'>رزرو آنلاین بیش از 150 مرکز دارای خدمات حمام ترکی تا 23% تخفیف </p>
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
          {data.map((item)=>{ return <SwiperSlide data-hash={`slide${item.id}`}><ProductCard src={item.src} key={item.id}/></SwiperSlide>})}

        </Swiper>
      </div>
      <div className="swiper-button-prev"></div>
    </div>
  );
}
