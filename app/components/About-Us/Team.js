"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';


const team = [
    {
        image: "/male.jpeg",
        name: "John Doe",
        position: "CEO",
    },
    {
        image: "/male.jpeg",
        name: "John Doe",
        position: "CEO",
    },
    {
        image: "/male.jpeg",
        name: "John Doe",
        position: "CEO",
    },
    {
        image: "/male.jpeg",
        name: "John Doe",
        position: "CEO",
    },
    {
        image: "/male.jpeg",
        name: "John Doe",
        position: "CEO",
    }
]
export default function Team(){
    return(
        <section className="py-20 ">
            <div className="space-y-5 text-center">
                <h5> Team</h5>
                <h1>Meet Our Leadership Team</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="container mx-auto pt-20">
            <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
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
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 70,
              centeredSlides: true,
            },
            }}
            modules={[ Navigation]}
            className="team md:!p-5"
        >
                    {team.map((item) => (
                        <SwiperSlide key={item.id} className="card-cut relative ">
                            <Image src={item.image} alt={item.name} width={500} height={300} 
                            className="rounded-[30px] object-cover w-full h-[450px]"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-70% to-primary rounded-[30px] p-10 flex flex-col justify-end gap-1 pb-10">
                                <h2 className="text-white text-2xl">{item.name}</h2>
                                <p className="text-white">{item.position}</p>
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

                       
            </div>
        </section>
    )
}
