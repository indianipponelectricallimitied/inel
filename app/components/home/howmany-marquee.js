"use client"
import { useEffect, useRef } from 'react';
import Image from "next/image";

const miles = [
  // { text: "3 Manufacturing Facilities " },
  { text: "2,000+ Employees "},
  { text: "Shipping to 12+ Countries "},
  { text: "Controllers "},
  { text: "5M+ Units "},
  { text: "Actuators "},


];

export default function HowManyMarquee() {

  return (
    <section className="py-5 overflow-hidden bg-primary">
        <div className="text-slider text-white">
          <div className="texts-slide flex">
            {miles.map((mile, index) => (
              <div key={index} className="flex items-center">
                <h1>{mile.text}</h1>
                  <span className="mx-16 text-white text-3xl font-bold">•</span>
              </div>
            ))}
            {miles.map((mile, index) => (
              <div key={index} className="flex items-center">
                <h1>{mile.text}</h1>
                <span className="mx-16 text-white text-3xl font-bold">•</span>
              </div>
            ))}
            {miles.map((mile, index) => (
              <div key={index} className="flex items-center">
                <h1>{mile.text}</h1>
                <span className="mx-16 text-white text-3xl font-bold">•</span>
              </div>
            ))}
        </div>
      </div>

      <style jsx global>{`
        .text-slider {
          overflow: hidden;
          padding: 30px 0;
          position: relative;
          width: 100%;
          display: flex;
        }

        .texts-slide {
          animation: scrolling 15s linear infinite;
          white-space: nowrap;
        }

        .texts-slide img {
          display: inline-block;
          width: 150px !important;
          height: auto !important;
          margin: 0 40px;
        }

        // .text-slider:hover .texts-slide {
        //   animation-play-state: paused;
        // }
        

        @keyframes scrolling {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(calc(-150px * 14));
          }
        }

        }
      `}</style>
    </section>
  );
}