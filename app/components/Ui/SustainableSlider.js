"use client"
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const sustainableImages = [
    {
        src: "/images/Sustainability/sustainability.webp",
        alt: "Sustainable Group - Main Building"
    },
    {
        src: "/images/Sustainability/SustainableGroup.png", 
        alt: "Sustainable Group - Employees"
    },
    {
        src: "/images/Sustainability/SustainableGroup.png",
        alt: "Sustainable Group - Facilities"
    },
    {
        src: "/images/Sustainability/SustainableGroup.png",
        alt: "Sustainable Group - Campus"
    },
    {
        src: "/images/Sustainability/SustainableGroup.png",
        alt: "Sustainable Group - Infrastructure"
    }
];

export default function SustainableSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="swiper-container h-[400px] md:h-[500px] relative">
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
                        // dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
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
                                    <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white transform rotate-45 translate-x-12 translate-y-12 md:translate-x-16 md:translate-y-16 opacity-90"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
            {/* Custom pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
                {sustainableImages.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === activeIndex 
                                ? 'bg-blue-600 scale-125' 
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div>

            <style jsx global>{`
                .swiper-container {
                    width: 100%;
                    margin: 40px 0;
                    padding: 45px 0;
                }
                .sustainable-swiper .swiper-pagination-bullet {
                    background: #3B82F6;
                    opacity: 0.5;
                    display: none;
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