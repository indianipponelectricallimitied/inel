"use client"
import Image from "next/image";
import Button from "../Ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const achievements = [
    {
        image: "/images/about/certificate.png",
        title: "Quality & Delivery Achievement Award from HONDA 2012 - 2013",
    },
    {
        image: "/images/about/ficci.jpeg",
        title: "Hr Summit & Score Awards from FICCI 2024",
    },
    {
        image: "/images/about/cii.jpeg",
        title: "INEL Wins Lean Practice Competition for Southern Region Award From CII",
    },
]

export default function Achievements() {
    return (
        <section>
            <div className='container py-20 mx-auto relative  flex justify-between flex-col lg:flex-row gap-20'>
                <div className='w-full lg:w-1/2 space-y-8'>
                    <h5>Achievements & Awards</h5>
                    <h1>Driving Success Through Excellence</h1>
                    <p>A testament to our relentless pursuit of excellence, our journey is marked by milestones that celebrate innovation, quality, and customer trust. Each recognition reflects our unwavering commitment to delivering exceptional products and services while setting new benchmarks in the industry.</p>
                    <Button href="/Products&Solutions" 
                        variant="blue" 
                        className="w-fit">
                        View All Solutions
                    </Button>
                </div>
                <div className='w-full lg:w-2/6'>
                    <Swiper 
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                          }}
                        speed={1500}
                        loop={true}
                        spaceBetween={20}
                        modules={[Autoplay,Pagination]}
                        className="Achievements"
                    >
                        {achievements.map((achievement, index) => (
                            <SwiperSlide key={index}>
                                <Image 
                                    src={achievement.image} 
                                    alt={achievement.title} 
                                    width={500} 
                                    height={300} 
                                    className="bg-[#F2F2F2] rounded-[20px] mx-auto min-h-[280px] object-cover border-[10px] border-[#E0E0E0]"
                                />
                                <h3 className="text-xl w-3/4  mx-auto text-center  pt-5 pb-10">{achievement.title}</h3>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx global>{`
                
            `}</style>
        </section>
    )
}
