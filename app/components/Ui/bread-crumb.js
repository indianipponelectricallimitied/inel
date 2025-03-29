"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuChevronRight } from "react-icons/lu";
import React from 'react';

export default function BreadCrumb({breadCrumbBg ,pageTitle}) {
    const pathname = usePathname();
    
    // Remove leading slash and split path into segments
    const pathSegments = pathname.split('/').filter(segment => segment);
    
    // Create breadcrumb items with proper formatting
    const breadcrumbItems = pathSegments.map((segment, index) => {
        // Format the segment text (convert-to-text → Convert To Text)
        const formattedText = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        // Build the href for this segment (accumulate previous segments)
        const href = '/' + pathSegments.slice(0, index + 1).join('/');

        return {
            text: formattedText,
            href: href
        };
    });

    return (
        <div className="rounded-[30px] h-[300px] md:h-[400px] md:p-20 flex items-center justify-center md:justify-normal mx-5 relative breadcrumb-cut"
        style={{
            background: `url(${breadCrumbBg}) no-repeat center center`,
            backgroundSize: 'cover',
        }}
        >
        <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-l from-transparent to-black/50 rounded-[30px]"></div>
         <div className='space-y-3 relative z-20'>
            <h1 className='text-white '>{pageTitle}</h1>
                <div className="flex items-center gap-2 text-white">
                    <Link href="/" className="hover:opacity-80">
                        Home
                    </Link>

                    {breadcrumbItems.map((item, index) => (
                        <React.Fragment key={item.href}>
                            <LuChevronRight />
                            {index === breadcrumbItems.length - 1 ? (
                                // Last item (current page)
                                <span>
                                    {item.text}
                                </span>
                            ) : (
                                // Clickable breadcrumb item
                                <Link href={item.href} className="hover:opacity-80">
                                    {item.text}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
