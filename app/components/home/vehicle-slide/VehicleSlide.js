"use client";
import Image from 'next/image';
import { VEHICLE_HOTSPOTS } from './constants';
import Hotspot from './Hotspot';
import HotspotMarker from './HotspotMarker';
import { useState } from 'react';

export default function VehicleSlide({ vehicleType, direction, engineType = 'IC' }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeHotspotIndex, setActiveHotspotIndex] = useState(0);

  const getVehicleConfig = () => {
    switch(vehicleType) {
      case "2W":
        return {
          image: engineType === 'EV' ? "/images/home/ev-scooter.png" : "/images/home/icbike.webp",
          className: `scooter !w-[380px] md:!w-[500px] ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`,
          wheels: engineType === 'IC'
        };
      case "CC":
        return {
          image: "/images/home/commercial.webp", // Using same image for both variants as per latest changes
          className: `car !w-[380px] md:!w-[480px] ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`,
          wheels: engineType === 'IC'
        };
      case "3W":
        return {
          image: "/images/home/3-whellar.webp", // Fixed typo in image path
          className: `auto ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`,
          wheels: true
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

  // Handlers for hotspot hover
  const handleHotspotHover = (idx) => setActiveHotspotIndex(idx);
  // No-op on leave: keep last hovered as active
  const handleHotspotLeave = () => {};

  return (
    <div className={`slide-content rover w-full flex justify-center items-center ${vehicleType === "CC" ? 'pt-20' : ''}`}>
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
        
        {/* Only show markers and hotspots on md+ screens */}
        <div className="hidden md:block">
          {imageLoaded && hotspots.map((hotspot, idx) => (
            <HotspotMarker
              key={`marker-${idx}`}
              x={hotspot.marker_x}
              y={hotspot.marker_y}
              isActive={activeHotspotIndex === idx}
              onHover={() => handleHotspotHover(idx)}
              onLeave={handleHotspotLeave}
            />
          ))}
        {/* Render all hotspots (detailed info) */}
        {imageLoaded && hotspots.map((hotspot, idx) => (
          <Hotspot
            key={`hotspot-${idx}`}
            marker_x={hotspot.marker_x}
            marker_y={hotspot.marker_y}
            start_point={hotspot.start_point}
            mid_point={hotspot.mid_point}
            end_point={hotspot.end_point}
            canvas_position={hotspot.canvas_position}
            label={hotspot.label}
            object={hotspot.object}
            url={hotspot.url}
            isActive={activeHotspotIndex === idx}
          />
        ))}
        </div>
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
          <Image 
            src={vehicleType === "3W" ? "/images/home/Scooter-tyre.png" : "/rv-tyre.webp"} 
            alt="Front Wheel"
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