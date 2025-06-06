"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';


const team = [
    {
        image: "/images/about/person-1.png",
        name: "Mr. T.K. Balaji",
        position: "Chairman",
    },
    {
        image: "/images/about/person-2.png",
        name: "Mr. Arvind Balaji",
        position: "Managing Director",
    },
    {
        image: "/images/about/Subtract.png",
        name: "Mr. Anant Jaivant Talaulicar",
        position: "Independent Director",
    },
    {
        image: "/images/about/Subtract.png",
        name: "Mr. V Balaraman",
        position: "Independent Director",
    },
    {
        image: "/images/about/Subtract.png",
        name: "Dr Jayshree Suresh",
        position: "Independent Director",
    },
    {
        image: "/images/about/Subtract.png",
        name: "Mr T Momose",
        position: "Non-Executive Director",
    },
    {
        image: "/images/about/Subtract.png",
        name: "Mr Mukesh Kumar Somani",
        position: "Non-Executive Director",
    },
    {
        image: "/images/about/Subtract.png",
        name: "Ms Priyamvada Balaji",
        position: "Non-Executive Director",
    },
    {
        image: "/images/about/Subtract.png",
        name: "Mr K G Raghavan",
        position: "Independent Director",
    },
    {
        image: "/images/about/Subtract.png",
        name: "Mr R Vijayaraghavan",
        position: "Independent Director",
    },
    {
        image: "/images/about/Subtract.png",
        name: "Mr Elango Srinivasan",
        position: "Chief Financial Officer",
    },
    {
        image: "/images/about/Subtract.png",
        name: "Mr G Venkatram",
        position: "Company Secretary",
    },
]
export default function Team(){
    return(
        <section className="py-20 ">
            <div className="space-y-5 text-center" id="team">
                <h5> Team</h5>
                <h1>Meet Our Leadership Team</h1>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
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
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 70,
            },
            }}
            modules={[ Navigation]}
            className="team md:!p-5"
        >
                    {team.map((item) => (
                        <SwiperSlide key={item.id} className="card-cut-not relative ">
                            <Image src={item.image} alt={item.name} width={500} height={300} 
                            className="rounded-[30px] object-cover w-full h-[330px]"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-50% to-primary rounded-[30px] p-5 flex flex-col justify-end gap-1 ">
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
