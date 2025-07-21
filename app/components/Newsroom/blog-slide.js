"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from "../Ui/button";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import ApiService from "@/app/services/api";

/**
 * BlogSlide component
 * @param {Object} props
 * @param {number} sildeperview - Number of slides per view on desktop
 * @param {string[]} [includeCategories] - Array of category slugs/names to include (if provided, only posts in these categories are shown)
 */
export default function BlogSlide({ sildeperview, includeCategories }) {
    const [blogData, setBlogData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await ApiService.getPosts();
                setBlogData(data);
            } catch (err) {
                console.error("Error fetching blog data:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Filter blogData by includeCategories if provided
    let filteredBlogData = blogData;
    if (Array.isArray(includeCategories) && includeCategories.length > 0) {
        filteredBlogData = blogData.filter((blog) => {
            // Support both category as string or object with name/slug
            if (!blog.category) return false;
            if (typeof blog.category === "string") {
                return includeCategories.includes(blog.category);
            }
            if (typeof blog.category === "object" && blog.category !== null) {
                // Try both name and slug
                return (
                    (blog.category.name && includeCategories.includes(blog.category.name)) ||
                    (blog.category.slug && includeCategories.includes(blog.category.slug))
                );
            }
            return false;
        });
    }

    // Fallback content for loading state
    if (isLoading) {
        return (
            <div className="relative">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-20">
                    <div className="animate-pulse bg-gray-200 h-60 w-full md:w-1/2 rounded-[30px]"></div>
                    <div className="animate-pulse bg-gray-200 h-60 w-full md:w-1/2 rounded-[30px]"></div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="relative">
                <div className="text-center py-10">
                    <p className="text-red-500">Failed to load blog posts: {error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-primary text-white px-4 py-2 rounded-md"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    // Empty state
    if (!filteredBlogData || filteredBlogData.length === 0) {
        return (
            <div className="relative">
                <div className="text-center py-10">
                    <p className="text-gray-500">No blog posts available at the moment.</p>
                </div>
            </div>
        );
    }

    // Format date function
    const formatDate = (dateString) => {
        if (!dateString) return '';
        try {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        } catch (e) {
            console.error("Date formatting error:", e);
            return dateString;
        }
    };

    // Helper function to safely access nested properties
    const getProperty = (obj, path, fallback = '') => {
        return path.split('.').reduce((acc, part) => {
            return acc && acc[part] !== undefined ? acc[part] : fallback;
        }, obj);
    };

    // --- FLEX STRETCH HEIGHT ALIGNMENT ---
    // We'll use flexbox to stretch all slides to the same height.
    // 1. Make Swiper container and .swiper-wrapper full height, flex.
    // 2. Make .swiper-slide flex, items-stretch, and child .wrap flex-1 flex-col.
    // 3. Remove JS height adjustment code.

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: sildeperview,
                    },
                }}
                speed={1100}
                navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                }}
                // Remove onInit height adjustment
            >
                {filteredBlogData.map((blog, index) => (
                    <SwiperSlide key={blog.id || index} className="mb-16 blog-cut p-1 flex">
                        <div className="flex flex-col gap-5 p-3 rounded-[30px] border border-primary wrap transition-all duration-300 flex-1 h-full">
                            <Image
                                src={blog.featured_image || "/images/placeholder.jpg"}
                                alt={blog.title || "Blog post"}
                                className="rounded-[20px] h-[200px] w-full object-cover"
                                width={500}
                                height={200}
                                onError={(e) => {
                                    e.target.src = "/images/placeholder.jpg";
                                }}
                            />

                            <h1 className="text-xl font-medium line-clamp-2 h-[60px]">{blog.title}</h1>
                            <p className="text-sm line-clamp-3">{blog.intro}</p>
                            <div className="flex-1"></div>
                            <Button
                                variant="transparent"
                                href={`/newsroom/${blog.slug || blog.id}`}
                                className="ms-auto -mb-3 border-0 !text-[#160959] z-10"
                            >
                                Read More
                            </Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-prev absolute right-16 z-10 bottom-0 bg-purple rounded-[10px] p-3">
                <HiOutlineChevronLeft className="text-xl text-white" />
            </button>
            <button className="swiper-next absolute right-0 bottom-0 z-10 bg-purple rounded-[10px] p-3">
                <HiOutlineChevronRight className="text-xl text-white" />
            </button>
            <Button variant="blue" href="/newsroom" className="mx-0">View All Posts</Button>
            <style jsx global>{`
                /* Make Swiper and slides stretch to same height */
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
                .swiper-slide-active .wrap {
                    background-color: var(--primary);
                    color: white;
                }
                .swiper-slide-active.blog-cut::after{
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

                .swiper-next::after,
                .swiper-prev::after {
                    display: none;
                }
                .swiper-button-disabled{
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}
