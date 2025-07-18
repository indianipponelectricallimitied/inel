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

  // Check if EV or IC data exists for the current vehicle
  const hasEV = (() => {
    const currentVehicle = VEHICLE_TYPES[currentIndex];
    if (!currentVehicle) return false;
    const key = `${currentVehicle.background}_EV`;
    return (VEHICLE_HOTSPOTS[key] && VEHICLE_HOTSPOTS[key].length > 0);
  })();
  const hasIC = (() => {
    const currentVehicle = VEHICLE_TYPES[currentIndex];
    if (!currentVehicle) return false;
    const key = `${currentVehicle.background}_IC`;
    return (VEHICLE_HOTSPOTS[key] && VEHICLE_HOTSPOTS[key].length > 0);
  })();

  return (
    <section className="hero-swiper-section py-20 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className='w-full lg:w-[35%] space-y-5'>
          <h5>Our Solutions</h5>
          <h1>Powering Performance with Electronics.</h1>
          <p>From spark control to smart ECUs, INEL's electronic solutions support high-efficiency engine and EV platforms. Our technology fuels trusted performance across sectors</p>
        </div>

        <VehicleTabs currentIndex={currentIndex} goToSlide={goToSlide} />
      </div>
      <div className='container mx-auto md:flex flex-col lg:flex-row items-center justify-between'>
          <div className='md:w-[80%] me-auto relative'>
              {/* Mobile toggle buttons - positioned at top-left */}
              <div className="flex md:hidden items-center justify-start mb-4">
                <div className="flex items-center justify-center w-fit p-2 bg-gray-100 rounded-xl">
                  {hasEV && (
                    <button 
                      onClick={() => handleEngineToggle('EV')}
                      className={`py-2 px-4 rounded-lg flex gap-2 justify-center items-center ${engineType === 'EV' ? 'bg-purple text-white' : 'bg-transparent'}`}
                    >
                      <Image src="/images/home/ev.png" alt="EV" width={20} height={20} />
                      EV
                    </button>
                  )}
                  {hasIC && (
                    <button 
                      onClick={() => handleEngineToggle('IC')}
                      className={`py-2 px-4 rounded-lg flex justify-center items-center ${engineType === 'IC' ? 'bg-purple text-white' : 'bg-transparent'}`}
                    >
                      IC Engine
                    </button>
                  )}
                </div>
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
                      engineType={engineType}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Mobile Key Components with View All Solutions button */}
              <div className='flex flex-col md:hidden'>
                <div className="bg-gray-100 p-4 rounded-xl w-full max-h-[350px] overflow-y-auto custom-scrollbar mb-4">
                  <h3 className="text-lg font-semibold mb-2">Key Components:</h3>
                  <ul className="space-y-2">
                    {getCurrentHotspots().map((hotspot, idx) => (
                      <li key={idx} className="flex items-center gap-4 border-b border-gray-300 py-3 last:border-b-0">
                        <img
                          src={hotspot.object}
                          alt={hotspot.label}
                          className="w-16 h-16 object-contain rounded"
                        />
                        <a
                          href={hotspot.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-between text-black no-underline hover:text-blue-700 transition-colors text-lg font-semibold"
                          style={{ minWidth: 0 }}
                        >
                          <span className="truncate">{hotspot.label}</span>
                          <span className="ml-4 text-2xl" aria-label="External link">
                            ↗
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button href="/Products&Solutions" variant="blue" className="w-fit mx-auto">
                  View All Solutions
                </Button>
              </div>

              {/* Desktop View All Solutions button */}
              <div className="hidden md:block">
                <Button href="/Products&Solutions" variant="blue" className="w-fit mx-auto">
                  View All Solutions
                </Button>
              </div>
          </div>
          <div className='md:w-[20%] w-full'>
            {/* Desktop toggle buttons - hidden on mobile */}
            <div className="hidden md:flex md:flex-col items-center justify-center md:w-fit p-2 bg-gray-100 rounded-xl mb-10">
              {hasEV && (
                <button 
                  onClick={() => handleEngineToggle('EV')}
                  className={`py-8 md:w-[150px] rounded-lg w-full flex gap-2 justify-center items-center ${engineType === 'EV' ? 'bg-purple text-white' : ' '}`}
                >
                  <Image src="/images/home/ev.png" alt="EV" width={25} height={25} />
                  EV
                </button>
              )}
              {hasIC && (
                <button 
                  onClick={() => handleEngineToggle('IC')}
                  className={`py-8 md:w-[150px] w rounded-lg w-full flex justify-center items-center  ${engineType === 'IC' ? 'bg-purple text-white' : ' '}`}
                >
                  IC Engine
                </button>
              )}
            </div>
          </div>
      </div>
    </section>
  );
}
