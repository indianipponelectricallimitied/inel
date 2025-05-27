"use client"
import { useEffect, useRef } from 'react';
import Image from "next/image";

const miles = [
  {
    text: "3 Facilities",
  },
  {
    text: "40+ Years Trusted Legacy",
  },
  {
    text: "12+ Countries",
  },


];

export default function HowManyMarquee() {

  return (
    <section className="pb-20 overflow-hidden">
        <div className="logo-slider">
          <div className="logos-slide flex">
            {miles.map((mile, index) => (
              <div key={index} className="flex items-center">
                <h1>{mile.text}</h1>
                  <span className="mx-16 text-primary text-3xl font-bold">•</span>
              </div>
            ))}
            {miles.map((mile, index) => (
              <div key={index} className="flex items-center">
                <h1>{mile.text}</h1>
                <span className="mx-16 text-primary text-3xl font-bold">•</span>
              </div>
            ))}
        </div>
      </div>

      <style jsx global>{`
        .logo-slider {
          overflow: hidden;
          padding: 30px 0;
          position: relative;
          width: 100%;
          display: flex;
        }

        .logos-slide {
          animation: scroll 20s linear infinite;
          white-space: nowrap;
        }

        .logos-slide img {
          display: inline-block;
          width: 150px !important;
          height: auto !important;
          margin: 0 40px;
        }

        // .logo-slider:hover .logos-slide {
        //   animation-play-state: paused;
        // }
        

        @keyframes scroll {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(calc(-150px * 10));
          }
        }

        }
      `}</style>
    </section>
  );
}