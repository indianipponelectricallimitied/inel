"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Button from '../../Ui/button';
import VehicleTabs from './VehicleTabs';
import VehicleSlide from './VehicleSlide';
import { VEHICLE_TYPES, VEHICLE_HOTSPOTS } from './constants';

import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

export default function Tab() {
  const swiperRef = useRef(null);
  const [direction, setDirection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBackground, setShowBackground] = useState(true);
  const [engineType, setEngineType] = useState('IC'); // Add this line

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

  const handleEngineToggle = (type) => {
    setEngineType(type);
  };

  // Get current vehicle's hotspots
  const getCurrentHotspots = () => {
    const currentVehicle = VEHICLE_TYPES[currentIndex];
    if (!currentVehicle) return [];
    
    const hotspotKey = `${currentVehicle.background}_${engineType}`;
    return VEHICLE_HOTSPOTS[hotspotKey] || [];
  };

  return (
    <section className="hero-swiper-section py-20 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className='w-full lg:w-[35%] space-y-5'>
          <h5>Our Solutions</h5>
          <h1>Powering Performance with Electronics.</h1>
          <p>From spark control to smart ECUs, INEL’s electronic solutions support high-efficiency engine and EV platforms. Our technology fuels trusted performance across sectors</p>
        </div>

        <VehicleTabs currentIndex={currentIndex} goToSlide={goToSlide} />
      </div>
      <div className='container mx-auto md:flex flex-col lg:flex-row items-center justify-between'>
          <div className='md:w-[80%] me-auto relative'>
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
                      engineType={engineType}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
          <div className='md:w-[20%] w-full'>
            {/* key components */}
            <div className='flex justify-center items-center md:hidden mb-4'>
                <div className="bg-gray-100 p-4 rounded-xl w-full">
                  <h3 className="text-lg font-semibold mb-2">Key Components:</h3>
                  <ul className="space-y-2">
                    {getCurrentHotspots().map((hotspot, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple rounded-full"></span>
                        <span className="text-sm">{hotspot.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            <div className="flex md:flex-col   items-center justify-center md:w-fit p-2 bg-gray-100 rounded-xl mb-10">
              <button 
                onClick={() => handleEngineToggle('EV')}
                className={`py-8 md:w-[150px]   rounded-lg w-full flex gap-2 justify-center items-center ${engineType === 'EV' ? 'bg-purple text-white' : ' '}`}
              >
                <Image
                  src="/images/home/ev.png" alt="EV" width={25} height={25} />
                EV
              </button>
              <button 
                onClick={() => handleEngineToggle('IC')}
                className={`py-8 md:w-[150px] w rounded-lg w-full flex justify-center items-center  ${engineType === 'IC' ? 'bg-purple text-white' : ' '}`}
              >
                IC Engine
              </button>
            </div>
            
          </div>
      </div>
      <Button href="/Products&Solutions" variant="blue" className="w-fit mx-auto">
        View All Solutions
      </Button>
    </section>
  );
}
