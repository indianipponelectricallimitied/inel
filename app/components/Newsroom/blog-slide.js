"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from "../button";
import { HiOutlineChevronRight , HiOutlineChevronLeft } from "react-icons/hi";
const blogData = [
    {
        id: 1,
        image: "/dummy.png",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 2,
        image: "/dummy.jpg",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 3,
        image: "/dummy.png",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 4,
        image: "/dummy.png",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
]
export default function BlogSlide(){
    return(
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                }}
                speed={1100}
                navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {blogData.map((blog) => (
                    <SwiperSlide key={blog.id} className="mb-16">
                        <div className="flex flex-col gap-5 p-3 pb-10 rounded-[30px] border border-primary wrap transition-all duration-300">
                            <Image src={blog.image} alt="Blog Slide" className="rounded-[20px] h-[200px] w-full object-cover" width={500} height={200} />
                            <h1 className="text-xl">{blog.title}</h1>
                            <p className="text-sm">{blog.description}</p>
                            <Button variant="white" href="/#" className="ms-auto">Read More</Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-prev absolute right-16 z-10 bottom-0 bg-primary rounded-[10px] p-3">
                <HiOutlineChevronLeft className="text-xl  text-white " />
            </button>
            <button className="swiper-next absolute right-0 bottom-0 z-10 bg-primary rounded-[10px] p-3 ">
                <HiOutlineChevronRight className="text-xl text-white" />
            </button>
            <Button variant="blue" href="/blogs" className="">Read More</Button>
            <style jsx global>{`
                .swiper-slide-active .wrap {
                    background-color: var(--primary);
                    color: white;
                }
                
                /* Hide default Swiper navigation arrows */
                .swiper-next::after,
                .swiper-prev::after {
                    display: none;
                }
                .swiper-button-disabled{
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            `}</style>
        </div>
    )
}
