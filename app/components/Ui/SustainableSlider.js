"use client"
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import slider1 from "@/public/images/Sustainability/sustainability2.webp"
import slider2 from "@/public/images/Sustainability/sustainability.webp"
import slider3 from "@/public/images/Sustainability/3.webp"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const sustainableImages = [
    {
        src: slider1,
        alt: "Sustainable Group - Main Building"
    },
    {
        src: slider2, 
        alt: "Sustainable Group - Employees"
    },
    {
        src: slider3,
        alt: "Sustainable Group - Facilities"
    },
    {
        src: slider1,
        alt: "Sustainable Group - Main Building"
    },
    {
        src: slider2, 
        alt: "Sustainable Group - Employees"
    },
    {
        src: slider3,
        alt: "Sustainable Group - Facilities"
    },

];

export default function SustainableSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full container mx-auto my-0">
            <div className="swiper-container h-[300px] md:h-[600px] relative !m-0 p-0">
                <Swiper
                    spaceBetween={40}
                    slidesPerView={1.5}
                    centeredSlides={true}
                    loop={true}
                    speed={500}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: false,
                    }}
                    modules={[Pagination]}
                    className="sustainable-swiper h-full"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.5,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2.75,
                            spaceBetween: 0,
                        },
                        1080: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                    }}
                >
                    {sustainableImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative overflow-hidden  transition-all duration-700 transform h-full">
                                <div className="relative h-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover rounded-[30px] "
                                        priority={index === 0}
                                    />
                                    
                                    {/* Cut design overlay */}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
            </div>
            
            

            <style jsx global>{`
                .swiper-container {
                    width: 100%;
                    padding: 10px;
                }
                .sustainable-swiper .swiper-pagination-bullet {
                    background: #3B82F6;
                    opacity: 0.5;
                    
                    
                }
                .sustainable-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: #3B82F6;
                }
                .sustainable-swiper .swiper-slide {
                    opacity: 1;
                    overflow: hidden;
                    transition: .5s;
                    border-radius: 16px;
                    height: 100%;
                }
                .sustainable-swiper .swiper-slide-active {
                    opacity: 1;
                    z-index: 1;
                    transform: scale(2);
                    @media (max-width: 768px) {
                        transform: scale(1.6);
                    }
                }
                .sustainable-swiper .swiper-slide img {
                    width: 100%;
                    object-fit: contain;
                    border-radius: 30px;
                    
                }
                .sustainable-swiper .swiper-wrapper {
                    align-items: center;
                    height: 100%;
                }
                .sustainable-swiper {
                    height: 100%;
                }
            `}</style>
        </div>
    );
} 