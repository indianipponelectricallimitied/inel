"use client"

import Image from "next/image";
import Link from "next/link";
import { IoCalendarOutline } from "react-icons/io5";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";import { BsArrowUpRightSquareFill } from "react-icons/bs";


export default function NewsCard({ post }) {
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

    const shorttext = post.intro.substring(0, 100) + '...';

    return (
        <div className=" overflow-hidden transition-all duration-300 ">
            <Link href={`/newsroom/${post.slug || post.id}`}>
                <div className="relative md:aspect-video aspect-square overflow-hidden">
                    <Image 
                        src={post.featured_image || "/images/placeholder.jpg"} 
                        alt={post.title || "Blog post"} 
                        fill
                        className="object-cover max-h-[300px] rounded-[8px] md:rounded-[20px] transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                            e.target.src = "/images/placeholder.jpg";
                        }}
                    />
                </div>
                
                <div className="p-2 md:p-5">
                    
                    
                    <h2 className="text-lg font-medium line-clamp-2 mb-3">{post.title}</h2>
                    
                    <p className="line-clamp-3 text-gray-700 mb-4">{shorttext}</p>

                    <div className="flex justify-between items-center">
                        {post.date_added && (
                            <p className="text-[11px] md:text-sm text-gray-500 flex items-center gap-2">
                                <IoCalendarOutline className="text-gray-500" />
                                {formatDate(post.date_added)}
                            </p>
                        )}
                        <BsArrowUpRightSquareFill className="text-primary lg:text-4xl text-2xl md:rounded-[10px]" />
                    </div>
                </div>
            </Link>
        </div>
    );
}