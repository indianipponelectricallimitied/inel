"use client"

import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
    '/images/career/careerbanner2.png',
    '/images/career/breadcrumb.webp',
];

export default function BreadcrumbSlider() {
    return (
        <div className="rounded-[30px] h-[300px] md:h-[calc(100vh-400px)] p-2   mx-5 relative breadcrumb-cut overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="absolute inset-0 w-full h-full rounded-[30px]"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className="w-full h-full"
                            style={{
                                background: `url(${image}) no-repeat center center`,
                                backgroundSize: 'cover',
                            }}
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-black/50 rounded-[30px]">
                                <div className="flex items-end p-20 justify-center md:justify-normal   h-full relative z-20">
                                    <div className='space-y-3'>
                                        <h1 className='text-white'>Career</h1>
                                        <div className="flex items-center gap-2 text-white">
                                            <Link href="/" className="hover:opacity-80">
                                                Home
                                            </Link>
                                            <span>/</span>
                                            <span>Career</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            
        </div>
    )
}
