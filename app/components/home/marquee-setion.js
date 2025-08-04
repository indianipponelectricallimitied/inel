"use client"
import { useEffect, useRef } from 'react';
import Image from "next/image";

const logos = [
  {
    src: "/images/home/companies/yanmar.svg",
    alt: "Yanmar",
  },
  {
    src: "/images/home/companies/dellorto-seeklogo.svg",
    alt: "Dellorto",
  },
  {
    src: "/images/home/companies/tvs.svg",
    alt: "tvs",
  },
  {
    src: "/images/home/companies/hero.svg",
    alt: "hero",
  },
  {
    src: "/images/home/companies/bajaj.svg",
    alt: "bajaj",
  },
  {
    src: "/images/home/companies/Suzuki_Motorcycle_India_Limited.svg",
    alt: "suzuku 2w",
  },
  {
    src: "/images/home/companies/kawasaki.svg",
    alt: "Kawasaki",
  },
  {
    src: "/images/home/companies/re.svg",
    alt: "re",
  },
  {
    src: "/images/home/companies/piaggio-1-logo-svg-vector.svg",
    alt: "Piaggio",
  },
  {
    src: "/images/home/companies/mahindra.svg",
    alt: "Mahindra 2w",
  },
  {
    src: "/images/home/companies/Yamaha_Motor_Company-Logo.wine.svg",
    alt: "Yamaha",
  },
  {
    src: "/images/home/companies/KTM.svg",
    alt: "KTM",
  },
  {
    src: "/images/home/companies/Triumph_Motorcycles_Ltd.svg",
    alt: "Triumph",
  },
  {
    src: "/images/home/companies/honda.svg",
    alt: "honda",
  },
  {
    src: "/images/home/companies/blueriverlogo.svg",
    alt: "River ",
  },
  {
    src: "/images/home/companies/Ultraviolet.png",
    alt: "Ultraviolet",
  },
  {
    src: "/images/home/companies/greaves.svg",
    alt: "greaves",
  },
  {
    src: "/images/home/companies/zf.svg",
    alt: "zf",
  },
  {
    src: "/images/home/companies/rehlko.svg",
    alt: "rehlko",
  },
  {
    src: "/images/home/companies/generac.svg",
    alt: "generac",
  },
  {
    src: "/images/home/companies/polaris.png",
    alt: "polaris",
  },
  {
    src: "/images/home/companies/John_Deere.svg",
    alt: "John Deere",
  },
 

  
];


export default function MarqueeSection() {

  return (
    <section className="bg-[#F8F8F8] pb-16 overflow-hidden">
        <div className="container mx-auto">
          <div className='relative'>
            <h1 className='text-center bg-[#F8F8F8] relative z-10 w-fit mx-auto px-5'>Trusted by Leaders</h1>
            <span className='border-b border-[#D9D9D9] w-full absolute bottom-[40%] -translate-y-1/2 left-0'></span>
          </div>
          <p className='text-center py-10 md:w-4/5 mx-auto'>Collaborating with top automotive brands to drive innovation, performance, and excellence in mobility solutions.</p>
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
          width: 200px !important;
          height: 150px !important;
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
            transform: translateX(calc(-200px * 9));
          }
        }
        }
      `}</style>
      <p className='text-right pr-4 container-fluid text-sm'>*Logos shown are trademarks of their respective owners</p>
    </section>
  );
}