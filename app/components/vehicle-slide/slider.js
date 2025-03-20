"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button';

import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

const VEHICLE_TYPES = [
  {
    id: 0,
    title: "2 Wheeler",
    image: "/images/home/vehicle-(4).png",
    alt: "2 Wheeler",
    background: "2W"
  },
  {
    id: 1,
    title: "Snow Mobile",
    image: "/images/home/vehicle-(2).png",
    alt: "Snow Mobile",
    background: "4W"
  },
  {
    id: 2,
    title: "3 Wheeler",
    image: "/images/home/vehicle-(1).png",
    alt: "3 Wheeler",
    background: "3W"
  },
  {
    id: 3,
    title: "ATV",
    image: "/images/home/vehicle-(3).png",
    alt: "ATV",
    background: "ATV"
  }
];

export default function Tab() {
  // Use a ref to control the swiper so we can navigate to specific slides on tab click
  const swiperRef = useRef(null);
  const [direction, setDirection] = useState(null); // Store direction of slide change
  const [currentIndex, setCurrentIndex] = useState(0); // Store current index
  const [showBackground, setShowBackground] = useState(true);

  // Updated goToSlide function to prevent repeated clicks on active slide
  const goToSlide = (index) => {
    // Don't do anything if clicking the currently active slide
    if (currentIndex === index) return;
    
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handleSlideChange = () => {
    const swiper = swiperRef.current.swiper;
    const currentSlideIndex = swiper.realIndex;
    const previousSlideIndex = swiper.previousIndex;

    // First hide the background
    setShowBackground(false);

    // Set direction as before
    if (currentSlideIndex > previousSlideIndex) {
      setDirection('forward');
    } else {
      setDirection('backward');
    }

    // Show background after 2s delay
    setTimeout(() => {
      setShowBackground(true);
      setCurrentIndex(currentSlideIndex);
    }, 500);

    // Add animation class to the previous and next slides based on the direction
    const activeSlide = swiper.slides[swiper.realIndex];
    const prevSlide = swiper.slides[swiper.previousIndex];
    const nextSlide = swiper.slides[swiper.realIndex + 1] || swiper.slides[0]; // Ensure nextSlide wraps around when looping
  
    // Clear previous animation classes
    activeSlide.classList.remove('forward', 'backward');
    prevSlide.classList.remove('forward', 'backward');
    nextSlide.classList.remove('forward', 'backward');
  
    // Force reflow to trigger animation correctly
    void activeSlide.offsetWidth;
    void prevSlide.offsetWidth;
    void nextSlide.offsetWidth;
  
    // Apply the forward/backward animation classes to the slides
    activeSlide.classList.add(direction);
    prevSlide.classList.add(direction === 'forward' ? 'backward' : 'forward');
    nextSlide.classList.add(direction === 'forward' ? 'forward' : 'backward');
  };
  


  return (
    <section className="hero-swiper-section py-20 relative">
      {/* Top Content / Hero */}
      <div className="container mx-auto flex  flex-col md:flex-row items-center justify-between  px-5 md:px-0">
        <div className='w-full md:w-[30%] space-y-5'>
          <h5 >Our Solutions</h5 >
          <h1>Driving Excellence Across Sectors</h1>
          <p> Engineering reliable solutions for transportation, adventure, and utility applications.</p>
        </div>

        {/* Tab Navigation (slide selectors) */}
      <div className="hero-tabs flex gap-1 md:gap-5 w-full md:w-2/4 mt-10 md:mt-0">
        {VEHICLE_TYPES.map((vehicle) => (
          <button 
            key={vehicle.id}
            onClick={() => goToSlide(vehicle.id)}
            className={`relative ${currentIndex === vehicle.id ? 'active' : ''}`}
          >
            <Image 
              src={vehicle.image} 
              alt={vehicle.alt} 
              width={300} 
              height={300} 
              className='rounded-[10px] title-image'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-30% from-transparent to-black rounded-[10px]'></div>
            <p className='absolute bottom-0 left-0 p-2 md:p-4 text-white text-[12px] md:text-[16px] text-left '>
              {vehicle.title}
            </p>
          </button>
        ))}
      </div>
      </div>

      {/* Updated background text */}
      <div 
        key={VEHICLE_TYPES[currentIndex].id} 
        className={`absolute-backText  ${showBackground ? 'fade-in' : 'fade-out'}`}
      >
        {VEHICLE_TYPES[currentIndex].background}
      </div>

      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        className="hero-swiper flex justify-center items-center"
        slidesPerView={1}
        loop={true}
        speed={2000}
        mousewheel={false}
        grabCursor={false}
        allowTouchMove={false}
        onSlideChange={handleSlideChange} // Listen to slide change
      >
        {/* Slide 1: Passenger Vehicles */}
        <SwiperSlide className={`relative ${direction === 'forward' ? 'forward' : direction === 'backward' ? 'backward' : ''}`}>
          <div className="slide-content rover w-full flex justify-center items-center">
  
            <Image
              src="/Scooter 1.png"
              alt="Passenger Vehicle"
              className='scooter'
              width={1000}
              height={1000}
            />
            {/* <div className="rover-wheel flex justify-between">
              <img src="./rv-tyre.webp" className="front wheel" />
              <img src="./rv-tyre.webp" className="back wheel" />
            </div> */}

          </div>
        </SwiperSlide>


        <SwiperSlide className={`relative ${direction === 'forward' ? 'forward' : direction === 'backward' ? 'backward' : ''}`}>
          <div className="slide-content rover w-full flex justify-center items-center pt-20">
            <Image
              src="/rrvr.webp"
              alt="Passenger Vehicle"
              className='car'
              width={500}
              height={300}
            />

            <div className="rover-wheel flex justify-between">
              <img src="./rv-tyre.webp" className="front wheel" />
              <img src="./rv-tyre.webp" className="back wheel" />
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={`relative ${direction === 'forward' ? 'forward' : direction === 'backward' ? 'backward' : ''}`}>

          <div className="slide-content rover w-full flex justify-center items-center">
            <img
              src="./3-whellar.png"
              alt="Passenger Vehicle"
              className='auto'
            />
            {/* <div className="rover-wheel flex justify-between">
              <img src="./rv-tyre.webp" className="front wheel" />
              <img src="./rv-tyre.webp" className="back wheel" />
            </div> */}

          </div>
        </SwiperSlide>
        <SwiperSlide className={`relative ${direction === 'forward' ? 'forward' : direction === 'backward' ? 'backward' : ''}`}>

          <div className="slide-content rover w-full flex justify-center items-center">
            <Image
              src="/atv.png"
              alt="Passenger Vehicle"
              className='ATV'
              width={1000}
              height={1000}
            />
            {/* <div className="rover-wheel flex justify-between">
              <img src="./rv-tyre.webp" className="front wheel" />
              <img src="./rv-tyre.webp" className="back wheel" />
            </div> */}

          </div>
        </SwiperSlide>




      </Swiper>

      <Button   href="/learn" 
      variant="blue" 
      className="w-fit mx-auto">
  View All Solutions
</Button>
    </section>
  );
}
