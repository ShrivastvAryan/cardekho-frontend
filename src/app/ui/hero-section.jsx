 "use client";
 import React from "react";
 import Image from 'next/image'
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 
 const HeroSection=()=>{
    return(
        
    <div className="flex h-40 relative max-w-screen md:h-64 lg:h-96">
    <Swiper
    modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className='w-full'
  >
    <SwiperSlide className="w-screen aspect-video"><Image 
      src="/banner2.jpg"
      alt="Hyundai Creta"
      fill
      className="object-contain"/>  </SwiperSlide>
    <SwiperSlide className="w-screen aspect-video"><Image 
      src="/banner3.webp"
      alt="Nexon"
      fill
      className="object-contain"/>  </SwiperSlide>
    <SwiperSlide className="w-screen aspect-video"><Image 
      src="/banner4.webp"
      alt="Xuv 700"
      fill
      className="object-contain"/>  </SwiperSlide>
  </Swiper>    

     {/* <div className="w-72 h-36 bg-gray-200 ml-5 mr-3 rounded-md my-5 p-2 z-10">
        <p className="font-semibold text-lg text-center">Search By Car Brand</p>
        <Select bg="white" className="mt-2 font-semibold">
            {carBrands.map((brand)=>(
                <option key={brand.value} value={brand.value}>
                    {brand.label}
                </option>
            ))}
        </Select>
        <Button colorScheme='red' size="sm" className=" mt-3 mx-auto block">Search</Button>
      </div> */}
      </div>
    )
 }

 export default HeroSection
 
 