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
    title: "2005",
    description: "Started as a small team of 5 people",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2006",
    description: "Expanded to a team of 10 and moved to a new office",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2007",
    description: "Launched our first product",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2008",
    description: "Reached 100 customers",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2009",
    description: "Opened a second office",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2010",
    description: "Achieved $1M in revenue",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2011",
    description: "Launched a new product line",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2012",
    description: "Expanded internationally",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2013",
    description: "Won industry award for innovation",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2014",
    description: "Reached 500 customers",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2015",
    description: "Opened a third office",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2016",
    description: "Achieved $5M in revenue",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2017",
    description: "Launched a new service",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2018",
    description: "Reached 1000 customers",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2019",
    description: "Opened a fourth office",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2020",
    description: "Adapted to remote work",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2021",
    description: "Achieved $10M in revenue",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2022",
    description: "Launched a sustainability initiative",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2023",
    description: "Reached 2000 customers",
    image: "/images/about/vision-mission.webp"
  },
  {
    title: "2024",
    description: "Celebrated 20 years of innovation",
    image: "/images/about/vision-mission.webp"
  }
];

export default function Journey() {
  return (
    <section className='py-20 px-5 md:px-0 bg-primary timeline diamond-gradient'>
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
                        slidesPerView: 12,
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
                        <Image src={item.image} alt={item.title} width={500} height={400}  className='rounded-[25px] w-full h-full object-cover'/>
                        <div className='absolute z-10 bg-gradient-to-t from-black/90 from-10% to-transparent w-full h-full top-0 left-0 rounded-[25px] flex  flex-col gap-4 justify-end p-5 text-white'>
                        <div className='scroll-up'>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
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
