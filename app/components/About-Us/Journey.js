"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation } from 'swiper/modules';
import './about.css';
import Image from 'next/image';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const milestones = [
  {
    title: "1984 - 1988",
    description: "Company incorporation and joint venture conversion.",
    description2: "Manufacturing unit set up in Hosur; supply to 2-Wheeler OEMs.",
    image: "/placeholder.jpeg"
  },
  {
    title: "1989 - 1993",
    description: "Introduction of ignition systems for Moped and Generator applications.",
    description2: "Supply of Integral Unit (CDI ignition coil).",
    image: "/placeholder.jpeg"
  },
  {
    title: "1994 - 1998",
    description: "Export of ignition coils to Japan.",
    description2: "ISO 9001 certification for Hosur unit.",
    image: "/placeholder.jpeg"
  },
  {
    title: "1999 - 2003",
    description: "Supply to 3-Wheeler OEMs and Japanese 2W OEMs.",
    description2: "ISO 14001 EMS certification for Hosur.",
    image: "/placeholder.jpeg"
  },
  {
    title: "2004 - 2008",
    description: "Exports to Italy, Malaysia, Slovenia, Turkey.",
    description2: "Contract manufacturing for ECUs and ISO/TS 16949:2002 certification.",
    image: "/placeholder.jpeg"
  },
  {
    title: "2009 - 2013",
    description: "Exports to the USA, Thailand, and Italy.",
    description2: "Awarded 'Excellence in Technology' by ACMA.",
    image: "/placeholder.jpeg"
  },
  {
    title: "2014 - 2018",
    description: "EGR Controllers and TPS supplies for 3-Wheelers and General Purpose Engines.",
    image: "/placeholder.jpeg"
  },
  {
    title: "2018 - 2023",
    description: "Expanded into EV segment, acquired new customers, and opened new technical center.",
    description2: "Awarded 'Great Place to Work' for the 3rd time.",
    image: "/placeholder.jpeg"
  },
  {
    title: "2023 Onwards",
    description: "LIS acquired MEDI & MIHPL's stake; introduced ISG Controller for 3W.",
    image: "/placeholder.jpeg"
  },


];

export default function Journey() {
  return (
    <section className='py-20 bg-primary timeline diamond-gradient' id="legacy">
        <div className='container mx-auto'>

        <h5 className='text-white'>Our Journey</h5>
        <h1 className='text-white py-5 pb-20'>Milestones of Excellence</h1>
            <Swiper
                scrollbar={{
                draggable: true,
                dragSize: 30,
                hide: false,
                }}
                loop={true}
                speed={1500}
                slidesPerView={"1"}
                modules={[Scrollbar, Navigation]}
                className="journey"
                navigation={{
                nextEl: '.journey-swiper-next',
                prevEl: '.journey-swiper-prev',
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                        scrollbar: {
                            draggable: false,
                            dragSize: 100,
                            hide: false,
                        },
                    }
                }}
                
            >
                {milestones.map((item, index) => (
                    <SwiperSlide 
                        key={index} 
                        className='relative'
                        style={{ '--slide-title': `"${item.title}"` }}
                    >
                        <span className="dot"></span>
                    <div className="content" >
                        <Image src={item.image} alt={item.title} width={500} height={500}  className='rounded-[25px] w-full h-full object-cover'/>
                        <div className='absolute z-10 bg-gradient-to-t from-black/90 from-10% to-transparent w-full h-full top-0 left-0 rounded-[25px] flex  flex-col gap-4 justify-end p-5 text-white'>
                          <div className='scroll-up space-y-1'>
                              <h1 className='pb-3'>{item.title}</h1>
                              <p>{item.description}</p>
                              <p>{item.description2}</p>
                          </div>
                        </div>  
                        </div>
                    </SwiperSlide>
                ))}
                    <button className="journey-swiper-prev absolute right-16 z-10 bottom-0 bg-white rounded-[10px] p-3">
                        <HiOutlineChevronLeft className="text-xl  text-primary " />
                    </button>
                    <button className="journey-swiper-next absolute right-0 bottom-0 z-10 bg-white rounded-[10px] p-3 ">
                        <HiOutlineChevronRight className="text-xl text-primary" />
                    </button>

            </Swiper>
        </div>
    </section>
  );
}
