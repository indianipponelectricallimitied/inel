"use client"
import { useEffect, useRef } from 'react';
import Image from "next/image";

const logos = [
  {
    src: "/Vector.png",
    alt: "Partner Logo",
  },
  {
    src: "/Vector.png",
    alt: "Partner Logo",
  },
  {
    src: "/Vector.png",
    alt: "Partner Logo",
  },
  {
    src: "/Vector.png",
    alt: "Partner Logo",
  },
  {
    src: "/Vector.png",
    alt: "Partner Logo",
  },
  {
    src: "/Vector.png",
    alt: "Partner Logo",
  },
  {
    src: "/Vector.png",
    alt: "Partner Logo",
  },
  {
    src: "/Vector.png",
    alt: "Partner Logo",
  },
  {
    src: "/Vector.png",
    alt: "Partner Logo",
  },
  {
    src: "/Vector.png",
    alt: "Partner Logo",
  },

];

export default function MarqueeSection() {

  return (
    <section className="bg-white py-20 overflow-hidden">
        <h1 className='text-center '>Trusted by Leaders, <br/> Driven by Partnerships</h1>
        <p className='text-center py-10'>Collaborating with top automotive brands to drive innovation, performance, and excellence in mobility solutions.</p>
        <div className="logo-slider">
          <div className="logos-slide">
            {logos.map((logo, index) => (
              <Image 
                key={index} 
                src={logo.src} 
                alt={logo.alt} 
                width={100} 
                height={100}
                className="inline-block" 
              />
            ))}
            {logos.map((logo, index) => (
              <Image 
                key={index} 
                src={logo.src} 
                alt={logo.alt} 
                width={100} 
                height={100}
                className="inline-block" 
              />
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

        @media (max-width: 768px) {
          .logos-slide img {
            width: 100px !important;
          }

          @keyframes scroll {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(calc(-100px * 10));
          }
        }
        }
      `}</style>
    </section>
  );
}