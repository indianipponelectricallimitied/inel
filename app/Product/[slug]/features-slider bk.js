"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

export default function FeaturesSlider({features}){
    // Convert features object to array of entries
    const featuresArray = Object.entries(features).map(([text, image]) => ({
        text,
        image,
    }));

    return(
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            mousewheel={false}
            grabCursor={false}
            navigation={{
                nextEl: '.team-swiper-next',
                prevEl: '.team-swiper-prev',
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    centeredSlides: true,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                    allowTouchMove: false,
                    centeredSlides: true,
                },
            }}
            modules={[Navigation, Autoplay]}
            className="team md:!p-5"
        >
            {featuresArray.map((feature, index) => (
                <SwiperSlide key={index} className="product-feature-slide active:translate-y-[-10px] my-10 mt-20 !h-[300px]">
                    <Image 
                        src={feature.image || "/placeholder45.jpeg"} 
                        alt={feature.text} 
                        width={500} 
                        height={300} 
                        className="rounded-[10px] object-cover h-full w-full"
                        unoptimized
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-70% to-black rounded-[10px] p-5 flex flex-col justify-end gap-1">
                        <p className="text-white text-sm md:text-base">{feature.text}</p>
                    </div>
                </SwiperSlide>
            ))}

            <button className="team-swiper-prev absolute left-0 z-10 bottom-1/2 translate-y-1/2 bg-white rounded-[10px] p-3">
                <HiOutlineChevronLeft className="text-xl text-primary" />
            </button>
            <button className="team-swiper-next absolute right-0 bottom-1/2 translate-y-1/2 z-10 bg-white rounded-[10px] p-3">
                <HiOutlineChevronRight className="text-xl text-primary" />
            </button>
        </Swiper>
    )
}
