"use client"
import { useEffect, useRef } from 'react';
import Image from "next/image";

const logos = [
  {
    src: "/images/home/companies/bajaj-auto-logo.png",
    alt: "Bajaj Auto",
  },
  {
    src: "/images/home/companies/blueriverlogo.png",
    alt: "Blue River ",
  },
  {
    src: "/images/home/companies/Generac_Power_Systems_logo.png",
    alt: "Generac Power Systems ",
  },
  {
    src: "/images/home/companies/GreavesCotton.png",
    alt: "Greaves Cotton ",
  },
  {
    src: "/images/home/companies/Hero_MotoCorp_Logo.png",
    alt: "Hero MotoCorp ",
  },
  {
    src: "/images/home/companies/Lombardini.png",
    alt: "Lombardini ",
  },
  {
    src: "/images/home/companies/piaggio.png",
    alt: "Piaggio ",
  },
  {
    src: "/images/home/companies/Polaris.png",
    alt: "Polaris ",
  },
  {
    src: "/images/home/companies/RE.png",
    alt: "RE",
  },
  {
    src: "/images/home/companies/relhko.png",
    alt: "Relhko ",
  },
  {
    src: "/images/home/companies/tvs-motors-seeklogo.png",
    alt: "TVS Motors ",
  },
  {
    src: "/images/home/companies/uv-full-white-logo.png",
    alt: "UV ",
  },
  {
    src: "/images/home/companies/ZF_logo.png",
    alt: "ZF ",
  },
];

export default function MarqueeSection() {

  return (
    <section className="border-b border-[#D9D9D9] py-10 pb-20 pt-20 overflow-hidden">
        <div className="container mx-auto">
          <div className='relative'>
            <h1 className='text-center relative z-10 w-fit mx-auto px-5'>Driving Growth with Our Clients</h1>
            {/* <span className='border-b border-[#D9D9D9] w-full absolute bottom-[40%] -translate-y-1/2 left-0'></span> */}
          </div>
          <p className='text-center py-10 md:w-4/5 mx-auto'>Delivering reliable, high-impact solutions that drive growth and operational excellence for industry leaders.</p>
        </div>
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
          animation: scroll 30s linear infinite;
          white-space: nowrap;
        }

        .logos-slide img {
          display: inline-block;
          width: 150px !important;
          height: 110px !important;
          margin: 0 40px;
          object-fit: contain;
        }

        // .logo-slider:hover .logos-slide {
        //   animation-play-state: paused;
        // }
        

        @keyframes scroll {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(calc(-200px * 18));
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
            transform: translateX(calc(-200px * 14));
          }
        }
        }
      `}</style>
    </section>
  );
}