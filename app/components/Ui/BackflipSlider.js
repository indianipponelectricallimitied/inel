"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import required modules
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';

export default function BackflipSlider({testimonials}) {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        speed={700}
        pagination={{
            clickable: true,
            // dynamicBullets: true,
        }}
        // autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        // }}
        modules={[EffectCards, Pagination, Autoplay]}  
        className="BackflipSlider"
      >
        {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className='rounded-[20px] Backflipcut'>
                <div className='p-6  text-white '>
                    <div className="flex  gap-4 items-center  border-b border-white/40 pb-5">
                        <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover" />
                        <div>
                            <h2>{testimonial.name}</h2>                    
                            <p>{testimonial.identity}</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-3 pt-5'>
                        <h2 className='w-full md:w-2/5 md:text-[30px] font-medium leading-none'>{testimonial.feedbaktitle}</h2>
                        <p className='w-full md:w-3/5'>{testimonial.feedback}</p>
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
