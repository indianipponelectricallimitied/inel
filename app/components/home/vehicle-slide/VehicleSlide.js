"use client";
import Image from 'next/image';
import { VEHICLE_HOTSPOTS } from './constants';
import Hotspot from './Hotspot';
import { useState } from 'react';

export default function VehicleSlide({ vehicleType, direction, engineType = 'IC' }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getVehicleConfig = () => {
    switch(vehicleType) {
      case "2W":
        return {
          image: engineType === 'EV' ? "/images/home/ev-scooter.png" : "/images/home/ev-scooter.png",
          className: `scooter !w-[380px] md:!w-[500px] ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`,
          wheels: engineType === 'IC'
        };
      case "4W":
        return {
          image: "/rrvr.webp", // Using same image for both variants as per latest changes
          className: `car !w-[380px] md:!w-[480px] ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`,
          wheels: engineType === 'IC'
        };
      case "3W":
        return {
          image: "/3-whellar.png", // Fixed typo in image path
          className: `auto ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`,
          wheels: false
        };
      default:
        return null;
    }
  };

  const config = getVehicleConfig();
  const hotspotKey = `${vehicleType}_${engineType}`;
  const hotspots = VEHICLE_HOTSPOTS[hotspotKey] || [];

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`slide-content rover w-full flex justify-center items-center ${vehicleType === "4W" ? 'pt-20' : ''}`}>
      <div className="vehicle-image-container relative">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="animate-pulse w-full h-full" />
          </div>
        )}
        <Image
          src={config.image}
          alt={`${vehicleType} ${engineType} Vehicle`}
          className={`transition-opacity duration-300 ${config.className}`}
          width={1000}
          height={1000}
          priority={true}
          onLoad={handleImageLoad}
        />
        
        {imageLoaded && hotspots.map((hotspot, idx) => (
          <Hotspot
            key={idx}
            x={hotspot.x}
            y={hotspot.y}
            label={hotspot.label}
            object={hotspot.object}
            linepath={hotspot.linepath}
            line_position={hotspot.line_position}
            canvas_position={hotspot.canvas_position}
          />
        ))}
      </div>

      {config.wheels && imageLoaded && (
        <div className={`wheel-${vehicleType.toLowerCase()} flex justify-between`}>
          <Image 
            src={vehicleType === "2W" ? "/images/home/Scooter-tyre.png" : "/rv-tyre.webp"} 
            alt="Front Wheel"
            width={100}
            height={100}
            className="front wheel"
            priority={true}
          />
          <Image 
            src={vehicleType === "2W" ? "/images/home/Scooter-tyre.png" : "/rv-tyre.webp"} 
            alt="Back Wheel"
            width={100}
            height={100}
            className="back wheel"
            priority={true}
          />
        </div>
      )}
    </div>
  );
} 