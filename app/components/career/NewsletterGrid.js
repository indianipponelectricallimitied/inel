"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from "../Ui/button";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const newsletters = [
    {
        image: "https://indian-nippon.s3.ap-south-1.amazonaws.com/web/Q4-magazine.png",
        title: "Q4 | January-March 2026",
        link: "https://indian-nippon.s3.ap-south-1.amazonaws.com/web/Q4-Magazine.pdf",
    },
    {
        image: "https://indian-nippon.s3.ap-south-1.amazonaws.com/web/Q3-magazine.png",
        title: "Q3 | October-December 2025",
        link: "https://indian-nippon.s3.ap-south-1.amazonaws.com/web/Q3-Magazine.pdf",
    },
    {
        image: "https://indian-nippon.s3.ap-south-1.amazonaws.com/web/Q2-magazine.png",
        title: "Q2 | July-September 2025",
        link: "https://indian-nippon.s3.ap-south-1.amazonaws.com/web/Q2-Magazine.pdf",
    },
]

export default function NewsletterGrid() {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-5">
                <h1>In-House Magazine</h1>
                <p className="md:w-3/5 mx-auto">Stay connected with the latest happenings, milestones, and inspiring journeys from across our teams.</p>
            </div>

            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                    speed={1100}
                    navigation={{
                        nextEl: '.mag-next',
                        prevEl: '.mag-prev',
                    }}
                >
                    {newsletters.map((item, index) => (
                        <SwiperSlide key={index} className="magazine-slide mb-16 blog-cut p-1 flex">
                            <div className="flex flex-col gap-5 p-3 rounded-[30px] border border-primary wrap transition-all duration-300 flex-1 h-full">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-[20px] h-[300px] w-full object-cover"
                                        width={500}
                                        height={300}
                                    />
                                </a>
                                <h1 className="text-xl font-medium line-clamp-2">{item.title}</h1>
                                <div className="flex-1"></div>
                                <Button
                                    variant="transparent"
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ms-auto -mb-3 border-0 !text-[#160959] z-10"
                                >
                                    Read More
                                </Button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="mag-prev absolute right-16 z-10 bottom-0 bg-purple rounded-[10px] p-3">
                    <HiOutlineChevronLeft className="text-xl text-white" />
                </button>
                <button className="mag-next absolute right-0 bottom-0 z-10 bg-purple rounded-[10px] p-3">
                    <HiOutlineChevronRight className="text-xl text-white" />
                </button>

                <style jsx global>{`
                    .swiper, .swiper-wrapper {
                        height: 100%;
                        display: flex;
                    }
                    .swiper-wrapper {
                        align-items: stretch;
                    }
                    .swiper-slide {
                        display: flex !important;
                        align-items: stretch;
                        height: auto !important;
                    }
                    .wrap {
                        display: flex;
                        flex-direction: column;
                        flex: 1 1 0%;
                        height: 100%;
                    }
                    .magazine-slide .wrap {
                        transition: background-color 0.3s ease, color 0.3s ease;
                    }
                    .magazine-slide:hover .wrap {
                        background-color: var(--primary);
                        color: white;
                    }
                    .magazine-slide.blog-cut:hover::after {
                        content: "";
                        position: absolute;
                        right: 3px;
                        bottom: 3px;
                        width: 201px;
                        height: 62px;
                        background-image: url('/radius-cuts/breadcrumb-cut.svg');
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    .mag-next::after,
                    .mag-prev::after {
                        display: none;
                    }
                    .swiper-button-disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }
                    .line-clamp-2 {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                `}</style>
            </div>
        </div>
    )
}
