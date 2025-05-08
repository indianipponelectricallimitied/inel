"use client";
import Image from 'next/image';
import { VEHICLE_HOTSPOTS } from './constants';
import Hotspot from './Hotspot';

export default function VehicleSlide({ vehicleType, direction }) {
  const getVehicleConfig = () => {
    switch(vehicleType) {
      case "2W":
        return {
          image: "/images/home/Scooter.png",
          className: "scooter !w-[380px] md:!w-[500px]",
          wheels: true
        };
      case "4W":
        return {
          image: "/rrvr.webp",
          className: "car !w-[380px] md:!w-[480px]",
          wheels: true
        };
      case "3W":
        return {
          image: "/3-whellar.png",
          className: "auto",
          wheels: false
        };
      case "ATV":
        return {
          image: "/atv.png",
          className: "ATV",
          wheels: false
        };
      default:
        return null;
    }
  };

  const config = getVehicleConfig();
  const hotspots = VEHICLE_HOTSPOTS[vehicleType] || [];

  return (
    <div className={`slide-content rover w-full flex justify-center items-center ${vehicleType === "4W" ? 'pt-20' : ''}`}>
      <div className="vehicle-image-container" style={{ position: "relative" }}>
        <Image
          src={config.image}
          alt={`${vehicleType} Vehicle`}
          className={config.className}
          width={1000}
          height={1000}
        />
        
        {hotspots.map((hotspot, idx) => (
          <Hotspot
            key={idx}
            x={hotspot.x}
            y={hotspot.y}
            label={hotspot.label}
            object={hotspot.object}
          />
        ))}
      </div>

      {config.wheels && (
        <div className={`wheel-${vehicleType.toLowerCase()} flex justify-between`}>
          <img 
            src={vehicleType === "2W" ? "/images/home/Scooter-tyre.png" : "./rv-tyre.webp"} 
            className="front wheel" 
          />
          <img 
            src={vehicleType === "2W" ? "/images/home/Scooter-tyre.png" : "./rv-tyre.webp"} 
            className="back wheel" 
          />
        </div>
      )}
    </div>
  );
} 