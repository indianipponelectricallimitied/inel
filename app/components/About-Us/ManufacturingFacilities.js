"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const facilities = [
  {
    image: "/images/about/Facilities-(1).png",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    image: "/images/about/Facilities-(2).png",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    image: "/images/about/Facilities-(3).png",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    image: "/images/about/Facilities-(4).png",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    image: "/images/about/Facilities-(5).png",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    image: "/images/about/Facilities-(1).png",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    image: "/images/about/Facilities-(2).png",
    description: "Lorem ipsum dolor sit amet",
  },
]

export default function ManufacturingFacilities() {
  return (
    <>
      <div className='bg-[#E8E8E8] py-20'>
        <h1 className='text-center'>Manufacturing Facilities</h1>
        <Swiper
          slidesPerView={1.4}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          loop={true}
        
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
            }}
          breakpoints={{
            640: {
              slidesPerView: 1.4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
              centeredSlides: true,
            },
            }}
            modules={[ Navigation]}
          className="Facilities"
        >
          {facilities.map((facility, index) => (
            <SwiperSlide key={index} className='relative transition-all duration-300'>
              <Image src={facility.image} alt={facility.description} width={500} height={500}
              className='rounded-[10px] h-[300px] w-full object-cover'
              />
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 from-10% to-transparent rounded-[10px] flex items-end active-bg p-5'>
                <p className='text-white'>{facility.description}</p>
              </div>
            </SwiperSlide>
          ))}
                    <div className='container mx-auto relative z-20 bottom-[-90px]'>
                      <button className="swiper-prev absolute right-16 z-10 bottom-0 bg-primary rounded-[10px] p-3 a ">
                        <HiOutlineChevronLeft className="text-xl  text-white " />
                      </button>
                      <button className="swiper-next absolute right-0 bottom-0 z-10 bg-primary rounded-[10px] p-3  active: ">
                          <HiOutlineChevronRight className="text-xl text-white" />
                      </button>
                    </div>
        </Swiper>
      </div>
    </>
  );
}
