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
        image: "/images/about/ficci.jpeg",
        title: "HR Summit & SCORE Award by FICCI – 2024",
    },
    {
        image: "/images/about/generac.webp",
        alt: "generac",
        title: "Innovation Partner Award by Generac – 2025",
    },
    {
        image: "/images/about/tvslogo.webp",
        alt: "tvs",
        title: "Best Supplier Award by TVS – 2021-2022",
    },
    {
        image: "/images/about/gptw.webp",
        alt: "greatplacetowork",
        title: "Great Place to Work® Certified (Oct 2024 – Oct 2025)",
    },
    {
        image: "/images/about/cii.jpeg",
        title: "Lean Practice Competition Winner Southern Region by CII",
    },
    
    {
        image: "/images/about/iso-ieo.jpg",
        alt: "ISO-EC270012022",
        title: "ISO/IEC 27001:2022 – Information Security Management Certification",
    },
    {
        image: "/images/about/acma-award.jpg",
        alt: "acma",
        title: "Best Cluster Company Award by ACMA",
    },
    {
        image:"/images/about/GreenCo - Plaque & Certificate India Nippon Electricals Limited, Hosur.webp",
        alt:"GreenCo",
        title:"GreenCo Certification - India Nippon Electricals Limited, Hosur",
    } ,
    
]

export default function Achievements() {
    return (
        <section>
            <div className='container py-20 mx-auto relative  flex justify-between flex-col lg:flex-row gap-20' id="achievements">
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
                        // autoplay={{
                        //     delay: 3500,
                        //     disableOnInteraction: false,
                        //   }}
                        speed={1500}
                        loop={true}
                        spaceBetween={20}
                        modules={[Autoplay,Pagination]}
                        className="Achievements"
                    >
                        {achievements.map((achievement, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-[280px] bg-[#F2F2F2] rounded-[20px] mx-auto border-[10px] border-[#E0E0E0] flex items-center justify-center overflow-hidden">
                                    <Image 
                                        src={achievement.image} 
                                        alt={achievement.title} 
                                        width={500} 
                                        height={300} 
                                        className="w-full h-full object-contain p-4"
                                    />
                                </div>
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
