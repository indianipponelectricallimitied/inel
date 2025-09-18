"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../../components/Ui/button";
import ApiService from "@/app/services/api";

export default function BlogPost({ params }) {
    const unwrappedParams = React.use(params);
    const { slug } = unwrappedParams;
    const router = useRouter();
    const [blogData, setBlogData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await ApiService.getPostBySlug(slug);
                setBlogData(data);
            } catch (err) {
                console.error("Error fetching blog data:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (slug) {
            fetchBlog();
        }
    }, [slug]);

    // Update document head for SEO when blogData is available
    useEffect(() => {
        if (blogData) {
            // Update title
            document.title = `${blogData.title} | India Nippon Electricals`;
            
            // Update meta description
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', blogData.intro || blogData.title);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = blogData.intro || blogData.title;
                document.head.appendChild(meta);
            }

            // Update meta keywords
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', `${blogData.title}, ${blogData.category?.name || 'news'}, INEL news, India Nippon Electricals`);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'keywords';
                meta.content = `${blogData.title}, ${blogData.category?.name || 'news'}, INEL news, India Nippon Electricals`;
                document.head.appendChild(meta);
            }

            // Update canonical link
            const canonicalLink = document.querySelector('link[rel="canonical"]');
            if (canonicalLink) {
                canonicalLink.setAttribute('href', `https://www.indianippon.com/newsroom/${slug}`);
            } else {
                const link = document.createElement('link');
                link.rel = 'canonical';
                link.href = `https://www.indianippon.com/newsroom/${slug}`;
                document.head.appendChild(link);
            }

            // Update Open Graph tags
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) {
                ogTitle.setAttribute('content', `${blogData.title} | India Nippon Electricals`);
            } else {
                const meta = document.createElement('meta');
                meta.setAttribute('property', 'og:title');
                meta.content = `${blogData.title} | India Nippon Electricals`;
                document.head.appendChild(meta);
            }

            const ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) {
                ogDescription.setAttribute('content', blogData.intro || blogData.title);
            } else {
                const meta = document.createElement('meta');
                meta.setAttribute('property', 'og:description');
                meta.content = blogData.intro || blogData.title;
                document.head.appendChild(meta);
            }

            const ogUrl = document.querySelector('meta[property="og:url"]');
            if (ogUrl) {
                ogUrl.setAttribute('content', `https://www.indianippon.com/newsroom/${slug}`);
            } else {
                const meta = document.createElement('meta');
                meta.setAttribute('property', 'og:url');
                meta.content = `https://www.indianippon.com/newsroom/${slug}`;
                document.head.appendChild(meta);
            }

            const ogType = document.querySelector('meta[property="og:type"]');
            if (ogType) {
                ogType.setAttribute('content', 'article');
            } else {
                const meta = document.createElement('meta');
                meta.setAttribute('property', 'og:type');
                meta.content = 'article';
                document.head.appendChild(meta);
            }

            const ogSiteName = document.querySelector('meta[property="og:site_name"]');
            if (ogSiteName) {
                ogSiteName.setAttribute('content', 'India Nippon Electricals');
            } else {
                const meta = document.createElement('meta');
                meta.setAttribute('property', 'og:site_name');
                meta.content = 'India Nippon Electricals';
                document.head.appendChild(meta);
            }

            // Update Twitter Card tags
            const twitterCard = document.querySelector('meta[name="twitter:card"]');
            if (twitterCard) {
                twitterCard.setAttribute('content', 'summary_large_image');
            } else {
                const meta = document.createElement('meta');
                meta.name = 'twitter:card';
                meta.content = 'summary_large_image';
                document.head.appendChild(meta);
            }

            const twitterTitle = document.querySelector('meta[name="twitter:title"]');
            if (twitterTitle) {
                twitterTitle.setAttribute('content', `${blogData.title} | India Nippon Electricals`);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'twitter:title';
                meta.content = `${blogData.title} | India Nippon Electricals`;
                document.head.appendChild(meta);
            }

            const twitterDescription = document.querySelector('meta[name="twitter:description"]');
            if (twitterDescription) {
                twitterDescription.setAttribute('content', blogData.intro || blogData.title);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'twitter:description';
                meta.content = blogData.intro || blogData.title;
                document.head.appendChild(meta);
            }
        }
    }, [blogData, slug]);

    // Format date function
    const formatDate = (dateString) => {
        if (!dateString) return '';
        try {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        } catch (e) {
            console.error("Date formatting error:", e);
            return dateString;
        }
    };

    // Generate NewsArticle JSON-LD when blogData is available
    const newsArticleJsonLd = blogData ? {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": blogData.title,
        "description": blogData.intro || blogData.title,
        "url": `https://www.indianippon.com/newsroom/${slug}`,
        "datePublished": blogData.date_added,
        "dateModified": blogData.date_updated || blogData.date_added,
        "author": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited"
        },
        "publisher": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.indianippon.com/logo.svg"
            }
        },
        "articleSection": blogData.category?.name || "News",
        "image": blogData.featured_image ? {
            "@type": "ImageObject",
            "url": blogData.featured_image
        } : undefined,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.indianippon.com/newsroom/${slug}`
        }
    } : null;

    // Loading state
    if (isLoading) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="animate-pulse space-y-8">
                    <div className="h-10 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-96 bg-gray-200 rounded"></div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h1 className="text-2xl font-bold text-red-500 mb-4">Error Loading Blog Post</h1>
                <p className="mb-6">{error}</p>
                <div className="flex justify-center gap-4">
                    <Button 
                        variant="blue" 
                        href="/"
                    >
                        Back to Home
                    </Button>
                    <button 
                        onClick={() => router.back()}
                        className="px-6 py-3 font-medium rounded-md text-white bg-primary hover:bg-blue-800 transition-colors duration-200"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    // Not found state
    if (!blogData) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
                <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
                <Button 
                    variant="blue" 
                    href="/"
                >
                    Back to Home
                </Button>
            </div>
        );
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            {newsArticleJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(newsArticleJsonLd),
                    }}
                />
            )}
            
            {/* Back button */}
            <button 
                onClick={() => router.back()} 
                className="flex items-center text-primary mb-8 hover:underline"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
            </button>
            
            {/* Blog header */}
            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">{blogData.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                    {blogData.date_added && (
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDate(blogData.date_added)}
                        </div>
                    )}
                    
                    {blogData.category && (
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            {blogData.category.name}
                        </div>
                    )}
                    
                    {/* {blogData.author && blogData.author.username && (
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {blogData.author.first_name && blogData.author.last_name 
                                ? `${blogData.author.first_name} ${blogData.author.last_name}` 
                                : blogData.author.username}
                        </div>
                    )} */}
                </div>
                
                {/* Featured image */}
                {blogData.featured_image && (
                    <div className="mb-8">
                        <Image 
                            src={blogData.featured_image} 
                            alt={blogData.title} 
                            width={1200} 
                            height={630} 
                            className="w-full h-auto rounded-lg object-cover max-h-[500px]"
                            onError={(e) => {
                                e.target.src = "/images/placeholder.jpg";
                            }}
                        />
                    </div>
                )}
                
                {/* Introduction */}
                {blogData.intro && (
                    <div className="text-xl font-medium text-gray-800 mb-8">
                        {blogData.intro}
                    </div>
                )}
            </header>
            
            {/* Blog content */}
            <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogData.body || '' }}
            ></div>
            
            {/* Footer navigation */}
            <div className="mt-16 pt-8 border-t border-gray-200">
            </div>
        </article>
    );
}
