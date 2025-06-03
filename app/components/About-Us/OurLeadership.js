"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { BiSolidQuoteLeft } from "react-icons/bi";
import Image from 'next/image';


const LeadershipData = [
    {
        id: 1,
        name: "Mr. Ravinder Sharma ",
        position: "President",
        text: "At India Nippon , each individual truly value partnership with Customers , Business Partners [Suppliers] and employees. Flexibility and challenging attitude to achieve excellence with passion is the strength of each member of India Nippon",
        image: "/images/about/Ravinder-Sharma.png",
    },
    {
        id: 2,
        name: "John Doe",
        position: "President",
        text: "At India Nippon , each individual truly value partnership with Customers , Business Partners [Suppliers] and employees. Flexibility and challenging attitude to achieve excellence with passion is the strength of each member of India Nippon",
        image: "/male.jpeg",
    },
    {
        id: 3,
        name: "John Doe",
        position: "President",
        text: "At India Nippon , each individual truly value partnership with Customers , Business Partners [Suppliers] and employees. Flexibility and challenging attitude to achieve excellence with passion is the strength of each member of India Nippon",
        image: "/male.jpeg",
    }
]

export default function OurLeadership() {
    return (
        <section className='py-20 '>
            <div className='container mx-auto relative '>
                <h1 className='text-center mb-10'>Our Leadership Message</h1>
                <Swiper 
                modules={[Navigation]}
                navigation={{
                    nextEl: '.leadership-swiper-next',
                    prevEl: '.leadership-swiper-prev',
                    }}
                 className="leadership"
                 >
                    {LeadershipData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='flex flex-col md:flex-row  md:gap-12 gap-2 pb-5'>
                                <div className='w-full md:w-1/3 h-80'>
                                    <Image src={item.image} alt={item.name} width={500} height={500} 
                                    className='rounded-[20px] h-full  object-cover'
                                    />
                                </div>
                                <div className='w-full md:w-2/3 relative card-cut bg-[#E0E7FF] rounded-[30px] p-10'>
                                        <BiSolidQuoteLeft className='text-primary text-4xl' />
                                        <p className='pb-5 pt-2 text-sm md:text-xl'>{item.text}</p>
                                        <h2 className='font-medium'>{item.name}</h2>
                                        <p>{item.position}</p>
                                </div>  
                            </div>
                        </SwiperSlide>
                    ))}
                  
                </Swiper>
                    <button className="leadership-swiper-prev right-[24%] absolute md:right-16 z-10 bottom-0 bg-primary rounded-[10px] p-3">
                        <HiOutlineChevronLeft className="text-xl  text-white " />
                    </button>
                    <button className="leadership-swiper-next absolute right-[7%] md:right-0 bottom-0 z-10 bg-primary rounded-[10px] p-3 ">
                        <HiOutlineChevronRight className="text-xl text-white" />
                    </button>
            </div>
        </section>
    )
}   
