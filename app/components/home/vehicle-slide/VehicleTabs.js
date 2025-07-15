"use client";
import Image from 'next/image';
import { VEHICLE_TYPES } from './constants';

export default function VehicleTabs({ currentIndex, goToSlide }) {
  return (
    <div className="hero-tabs flex gap-1 md:gap-5 w-full lg:w-2/4 mt-10 md:mt-0">
      {VEHICLE_TYPES.map((vehicle) => (
        <button 
          key={vehicle.id}
          onClick={() => goToSlide(vehicle.id)}
          className={`relative w-[160px] ${currentIndex === vehicle.id ? 'active' : ''}`}
        >
          <Image 
            src={vehicle.image} 
            alt={vehicle.alt} 
            width={300} 
            height={300} 
            className='rounded-[10px] title-image'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-30% from-transparent to-black rounded-[10px]'></div>
          <p className='absolute bottom-0 left-0 p-2 md:p-4 text-white text-[12px] md:text-[16px] text-left'>
            {vehicle.title}
          </p>
        </button>
      ))}
    </div>
  );
} 