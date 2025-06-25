"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Button from '../../Ui/button';
import VehicleTabs from './VehicleTabs';
import VehicleSlide from './VehicleSlide';
import { VEHICLE_TYPES } from './constants';

import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

export default function Tab() {
  const swiperRef = useRef(null);
  const [direction, setDirection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBackground, setShowBackground] = useState(true);

  const goToSlide = (index) => {
    if (currentIndex === index) return;
    
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handleSlideChange = () => {
    const swiper = swiperRef.current.swiper;
    const currentSlideIndex = swiper.realIndex;
    const previousSlideIndex = swiper.previousIndex;

    setShowBackground(false);

    if (currentSlideIndex > previousSlideIndex) {
      setDirection('forward');
    } else {
      setDirection('backward');
    }

    setTimeout(() => {
      setShowBackground(true);
      setCurrentIndex(currentSlideIndex);
    }, 500);
  };

  return (
    <section className="hero-swiper-section py-20 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className='w-full lg:w-[35%] space-y-5'>
          <h5>Our Solutions</h5>
          <h1>Powering Performance with Electronics.</h1>
          <p>From spark control to smart ECUs, INEL’s electronic solutions support high-efficiency engine and EV platforms. Our technology fuels trusted performance across sectors</p>
        </div>

        <VehicleTabs currentIndex={currentIndex} goToSlide={goToSlide} />
      </div>

      <div 
        key={VEHICLE_TYPES[currentIndex].id} 
        className={`absolute-backText ${showBackground ? 'fade-in' : 'fade-out'}`}
      >
        {VEHICLE_TYPES[currentIndex].background}
      </div>

      <Swiper
        ref={swiperRef}
        className="hero-swiper flex justify-center items-center"
        slidesPerView={1}
        loop={true}
        speed={2000}
        mousewheel={false}
        grabCursor={false}
        allowTouchMove={false}
        onSlideChange={handleSlideChange}
      >
        {VEHICLE_TYPES.map((vehicle) => (
          <SwiperSlide 
            key={vehicle.id}
            className={`relative ${direction === 'forward' ? 'forward' : direction === 'backward' ? 'backward' : ''}`}
          >
            <VehicleSlide 
              vehicleType={vehicle.background} 
              direction={direction}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button href="/Products&Solutions" variant="blue" className="w-fit mx-auto">
        View All Solutions
      </Button>
    </section>
  );
}
