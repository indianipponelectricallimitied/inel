"use client";

import { useState } from 'react';
import Image from "next/image";
import map from "@/public/images/Aftermarket/india.png";
import GlowingBox from "../Ui/GlowingBox"
import { MdLocationOn } from "react-icons/md";

const locations = [ 
  {
    id: 1,
    name: "Chennai",
     coordinates: { top: "75%", left: "44%" }
  },

  {
    id: 2,
    name: "Bengaluru",
    coordinates: { top: "75%", left: "40%" }
  },
  {
    id: 3,
    name: "Hyderabad",
     coordinates: { top: "60%", left: "42%" }
  },
  {
    id: 4,
    name: "Coimbatore",
    coordinates: { top: "80%", left: "40%" }
  },
  {
    id: 5,
    name: "Madurai",
    coordinates: { top: "84%", left: "41%" }
  },
  {
    id: 6,
    name: "Mumbai",
    coordinates: { top: "57%", left: "34%" }
  },
  {
    id: 7,
    name: "Pune",
    coordinates: { top: "61%", left: "36%" }
  },
  {
    id: 8,
    name: "Lucknow",
    coordinates: { top: "35%", left: "46%" }
  },
];

export default function IndiaMap() {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <section className="  py-20">
      <div className="container mx-auto px-4 relative">
        <h5>Global Scale</h5>
        <h1>Driving Success on a<br/> Global Scale</h1>
        <div className="relative -mt-20">
          <Image 
            src={map} 
            alt="Global Presence Map" 
            width={1000} 
            height={1000} 
            className="w-full h-[700px] object-contain opacity-80 py-10"
          />
          
          {/* Location Points */}
          {locations.map((location) => (
            <div
              key={location.id}
              className={`absolute transition-all duration-300  ${
                activeLocation === null || activeLocation === location.id 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-0'
              }`}
              style={{
                top: location.coordinates.top,
                left: location.coordinates.left,
              }}
            >
              <MdLocationOn className="text-primary text-4xl animate-bounce" />
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-white text-primary px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {location.name}
              </span>
            </div>
          ))}

        </div>
      {/* Legend */}
      
        <div className="md:absolute top-1/2  md:transform md:-translate-y-1/2 h-fit right-0 rounded-[20px] bg-[#ECF0FF] backdrop-blur-md ">
        <GlowingBox borderColor="#9EB2FF" className='p-10 rounded-[20px] '>
              <ul className="space-y-5 z-20 relative  text-sm">
                {locations.map((location) => (
                  <li 
                    key={location.id} 
                    className={`flex items-center gap-5 cursor-pointer transition-colors  ${
                      activeLocation === location.id ? 'underline underline-offset-4' : ''
                    }`}
                    onClick={() => setActiveLocation(
                      activeLocation === location.id ? null : location.id
                    )}
                  >
                     {location.name}
                  </li>
                ))}
              </ul>
              </GlowingBox>
            </div>
       
      </div>
    </section>
  );
}
