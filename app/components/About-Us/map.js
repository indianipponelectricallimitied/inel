"use client";

import { useState } from 'react';
import Image from "next/image";
import map from "@/public/images/about/map.png";
import { MdLocationOn } from "react-icons/md";

const locations = [
  {
    id: 1,
    name: "THAILAND",
    flag: "https://flagcdn.com/w40/th.png",
    coordinates: { top: "42%", left: "75%" }
  },

  {
    id: 2,
    name: "NEPAL",
    flag: "https://flagcdn.com/w40/np.png",
    coordinates: { top: "38%", left: "71%" }
  },
  {
    id: 3,
    name: "SRI LANKA",
    flag: "https://flagcdn.com/w40/lk.png",
    coordinates: { top: "48%", left: "72%" }
  },
  {
    id: 4,
    name: "USA",
    flag: "https://flagcdn.com/w40/us.png",
    coordinates: { top: "35%", left: "23%" }
  },
  {
    id: 5,
    name: "ITALY",
    flag: "https://flagcdn.com/w40/it.png",
    coordinates: { top: "33%", left: "52%" }
  },
  {
    id: 6,
    name: "CHINA",
    flag: "https://flagcdn.com/w40/cn.png",
    coordinates: { top: "35%", left: "77%" }
  },
  {
    id: 7,
    name: "SLOVENIA",
    flag: "https://flagcdn.com/w40/si.png",
    coordinates: { top: "32%", left: "53%" }
  },
  {
    id: 8,
    name: "BANGLADESH",
    flag: "https://flagcdn.com/w40/bd.png",
    coordinates: { top: "40%", left: "74%" }
  },
  {
    id: 9,
    name: "AFRICA",
    flag: "https://flagcdn.com/w40/za.png",
    coordinates: { top: "55%", left: "52%" }
  }
];

export default function Map() {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 relative">
        <h5 className="text-white">Global Scale</h5>
        <h1 className="text-white">Driving Success on a<br/> Global Scale</h1>
        <div className="relative">
          <Image 
            src={map} 
            alt="Global Presence Map" 
            width={1000} 
            height={500} 
            className="w-full opacity-80 py-10"
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
              <MdLocationOn className="text-white text-4xl animate-bounce" />
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-white text-primary px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {location.name}
              </span>
            </div>
          ))}

        </div>
                  {/* Legend */}
        <div className="md:absolute top-1/2  md:transform md:-translate-y-1/2 h-fit right-0 bg-white/10 backdrop-blur-md p-8 rounded-lg">
            <ul className="space-y-5 text-white text-sm">
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
                  <Image src={location.flag} alt={location.name} width={30} height={30} />
                  {location.name}
                </li>
              ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
