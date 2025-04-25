"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';



export default function FeaturesSlider({features}){
    return(
            <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
        
          navigation={{
            nextEl: '.team-swiper-next',
            prevEl: '.team-swiper-prev',
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
              centeredSlides: true,
            },
            }}
            modules={[ Navigation]}
            className="team md:!p-5"
        >
                    {features.map((feature, index) => (
                        <SwiperSlide key={index} className="product-feature-slide active:translate-y-[-10px] my-10 mt-20">
                            <Image src={feature.image || "/placeholder.jpeg"} alt={feature.title || feature} width={500} height={300} 
                            className="rounded-[10px] object-cover h-[300px] w-full"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-70% to-black rounded-[10px] p-5 flex flex-col justify-end gap-1 ">
                                <p className="text-white">{feature}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                    
                    

                        <button className="team-swiper-prev absolute left-0 z-10 bottom-1/2 bg-primary rounded-[10px] p-3">
                            <HiOutlineChevronLeft className="text-xl  text-white " />
                        </button>
                        <button className="team-swiper-next absolute right-0 bottom-1/2 z-10 bg-primary rounded-[10px] p-3  active: ">
                            <HiOutlineChevronRight className="text-xl text-white" />
                        </button>
                </Swiper>
    )
}
