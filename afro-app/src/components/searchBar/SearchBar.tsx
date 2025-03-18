"use client";

import "../component.css"
import axios from 'axios';

import React, { useEffect, useState } from 'react'
function SearchBar() {
    const [data,setData]=useState()

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>setData(response.data)).catch((err)=>{console.log(err)})
    },[])
  return (
    <div className="flex flex-row bg-gray-200 py-2 px-5 rounded-lg">
        <div className="flex flex-row basis-3/12 spaceBar">
            <span className="basis-8/12">همه شهر ها</span>
            <span className="basis-4/12 flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#E5E7EB" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" fill="" />
                </svg>
            </span>
        </div>
        <div className="flex basis-9/12">
            <div className="w-10/12">
                <input className="w-full searchItem" placeholder="جستجو در استخر ها،پارک های آبی،خدمات ماساژ..."/>
            </div>
            <div className="w-2/12 flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#e2e2e2" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7FC9FB"  className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" fill="" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default SearchBar