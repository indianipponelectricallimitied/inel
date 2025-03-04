"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

export default function Tab() {
  // Use a ref to control the swiper so we can navigate to specific slides on tab click
  const swiperRef = useRef(null);
  const [direction, setDirection] = useState(null); // Store direction of slide change

  // Handler to jump to a specific slide
  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handleSlideChange = () => {
    const swiper = swiperRef.current.swiper;
    const currentSlideIndex = swiper.realIndex; // Current slide index
    const previousSlideIndex = swiper.previousIndex; // Previous slide index
  
    // Determine the direction of slide change
    if (currentSlideIndex > previousSlideIndex) {
      setDirection('forward'); // If moving forward
    } else {
      setDirection('backward'); // If moving backward
    }
  
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
    <section className="hero-swiper-section">
      {/* Top Content / Hero */}
      <div className="hero-content">
        <h2>Our businesses</h2>
        <h3>Going strong</h3>
        <p>
          Our commercial vehicles rule the roads they run on. No terrain is too
          challenging and no load too heavy.
        </p>
        <a href="#discover" className="cta-link">
          Discover commercial vehicles
        </a>
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
        <SwiperSlide className={direction === 'forward' ? 'forward' : direction === 'backward' ? 'backward' : ''}>
          <div className="slide-content rover w-full flex justify-center items-center">
            <img
              src="./rrvr.webp"
              alt="Passenger Vehicle"
              className='rover'
            />
            <div className="rover-wheel flex justify-between">
              <img src="./rv-tyre.webp" className="front wheel" />
              <img src="./rv-tyre.webp" className="back wheel" />
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={direction === 'forward' ? 'forward' : direction === 'backward' ? 'backward' : ''}>
          <div className="slide-content rover w-full flex justify-center items-center">
            <img
              src="./rrvr.webp"
              alt="Passenger Vehicle"
              className='rover'
            />
            <div className="rover-wheel flex justify-between">
              <img src="./rv-tyre.webp" className="front wheel" />
              <img src="./rv-tyre.webp" className="back wheel" />
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={direction === 'forward' ? 'forward' : direction === 'backward' ? 'backward' : ''}>
          <div className="slide-content rover w-full flex justify-center items-center">
            <img
              src="./rrvr.webp"
              alt="Passenger Vehicle"
              className='rover'
            />
            <div className="rover-wheel flex justify-between">
              <img src="./rv-tyre.webp" className="front wheel" />
              <img src="./rv-tyre.webp" className="back wheel" />
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={direction === 'forward' ? 'forward' : direction === 'backward' ? 'backward' : ''}>
          <div className="slide-content rover w-full flex justify-center items-center">
            <img
              src="./rrvr.webp"
              alt="Passenger Vehicle"
              className='rover'
            />
            <div className="rover-wheel flex justify-between">
              <img src="./rv-tyre.webp" className="front wheel" />
              <img src="./rv-tyre.webp" className="back wheel" />
            </div>

          </div>
        </SwiperSlide>



      </Swiper>

      {/* Tab Navigation (slide selectors) */}
      <div className="hero-tabs flex gap-10">
        <button onClick={() => goToSlide(0)}>Passenger vehicles</button>
        <button onClick={() => goToSlide(1)}>Electric vehicles</button>
        <button onClick={() => goToSlide(2)}>Commercial vehicles</button>
        <button onClick={() => goToSlide(3)}>Luxury vehicles</button>
      </div>
    </section>
  );
}
