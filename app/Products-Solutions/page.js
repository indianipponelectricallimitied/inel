'use client';
import { useState, useEffect, Suspense, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import BreadCrumb from "../components/Ui/bread-crumb";
import CategoryNav from "../components/Products/CategoryNav";
import SearchBar from "../components/Products/SearchBar";
import ProductGrid from "../components/Products/ProductGrid";

function ProductsContent() {
    const [filter, setFilter] = useState({ type: 'all' });
    const [searchResults, setSearchResults] = useState(null);
    const searchParams = useSearchParams();
    const router = useRouter();
    const categoryNavRef = useRef(null);
    const searchBarRef = useRef(null);

    // Collection page JSON-LD for products
    const collectionPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Products & Solutions",
        "description": "Comprehensive range of automotive products and solutions including electronic ignition systems, fuel injection systems, sensors, and EV components.",
        "url": "https://www.indianippon.com/Products-Solutions",
        "mainEntity": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited"
        },
        "hasPart": [
            {
                "@type": "Product",
                "name": "Electronic Ignition Systems",
                "category": "Automotive Electronics"
            },
            {
                "@type": "Product",
                "name": "Fuel Injection Systems",
                "category": "Automotive Electronics"
            },
            {
                "@type": "Product",
                "name": "Automotive Sensors",
                "category": "Automotive Electronics"
            },
            {
                "@type": "Product",
                "name": "EV Components",
                "category": "Electric Vehicle Parts"
            }
        ]
    };

    // Update document head for SEO
    useEffect(() => {
        // Update title
        document.title = "Products & Solutions - Automotive Components & Electronics | India Nippon Electricals";
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', "Explore INEL's comprehensive range of automotive products and solutions including electronic ignition systems, fuel injection systems, sensors, and EV components for two-wheelers and commercial vehicles.");
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = "Explore INEL's comprehensive range of automotive products and solutions including electronic ignition systems, fuel injection systems, sensors, and EV components for two-wheelers and commercial vehicles.";
            document.head.appendChild(meta);
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'automotive products, electronic ignition, fuel injection systems, automotive sensors, EV components, two-wheeler parts, commercial vehicle components');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'keywords';
            meta.content = 'automotive products, electronic ignition, fuel injection systems, automotive sensors, EV components, two-wheeler parts, commercial vehicle components';
            document.head.appendChild(meta);
        }

        // Update canonical link
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute('href', 'https://www.indianippon.com/Products-Solutions');
        } else {
            const link = document.createElement('link');
            link.rel = 'canonical';
            link.href = 'https://www.indianippon.com/Products-Solutions';
            document.head.appendChild(link);
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', 'Products & Solutions - Automotive Components & Electronics | India Nippon Electricals');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:title');
            meta.content = 'Products & Solutions - Automotive Components & Electronics | India Nippon Electricals';
            document.head.appendChild(meta);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', "Explore INEL's comprehensive range of automotive products and solutions including electronic ignition systems, fuel injection systems, sensors, and EV components for two-wheelers and commercial vehicles.");
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:description');
            meta.content = "Explore INEL's comprehensive range of automotive products and solutions including electronic ignition systems, fuel injection systems, sensors, and EV components for two-wheelers and commercial vehicles.";
            document.head.appendChild(meta);
        }

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', 'https://www.indianippon.com/Products-Solutions');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:url');
            meta.content = 'https://www.indianippon.com/Products-Solutions';
            document.head.appendChild(meta);
        }

        const ogType = document.querySelector('meta[property="og:type"]');
        if (ogType) {
            ogType.setAttribute('content', 'website');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:type');
            meta.content = 'website';
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
            twitterTitle.setAttribute('content', 'Products & Solutions - Automotive Components & Electronics | India Nippon Electricals');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'twitter:title';
            meta.content = 'Products & Solutions - Automotive Components & Electronics | India Nippon Electricals';
            document.head.appendChild(meta);
        }

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', "Explore INEL's comprehensive range of automotive products and solutions including electronic ignition systems, fuel injection systems, sensors, and EV components for two-wheelers and commercial vehicles.");
        } else {
            const meta = document.createElement('meta');
            meta.name = 'twitter:description';
            meta.content = "Explore INEL's comprehensive range of automotive products and solutions including electronic ignition systems, fuel injection systems, sensors, and EV components for two-wheelers and commercial vehicles.";
            document.head.appendChild(meta);
        }
    }, []);

    // Handle URL parameters on component mount
    useEffect(() => {
        const type = searchParams.get('type');
        const value = searchParams.get('value');
        
        if (type && value) {
            const newFilter = { type: type, value: value };
            setFilter(newFilter);
            setSearchResults(null);
        }
    }, [searchParams]);

    // Auto-scroll to SearchBar on page load
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchBarRef.current) {
                searchBarRef.current.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 500); // Small delay to ensure page is fully loaded

        return () => clearTimeout(timer);
    }, []);

    // Determine initial tab and value for CategoryNav based on URL parameters
    const getInitialTabAndValue = () => {
        const type = searchParams.get('type');
        const value = searchParams.get('value');
        
        if (!type || !value) {
            return { initialTab: 'all', initialValue: null };
        }
        
        if (type === 'vehicle') {
            return { initialTab: 'category', initialValue: value };
        } else if (type === 'productType') {
            return { initialTab: 'type', initialValue: value };
        }
        
        return { initialTab: 'all', initialValue: null };
    };

    const { initialTab, initialValue } = getInitialTabAndValue();

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setSearchResults(null); // Clear search results when changing filters
        
        // Update URL parameters
        const params = new URLSearchParams();
        if (newFilter.type && newFilter.type !== 'all') {
            params.set('type', newFilter.type);
        }
        if (newFilter.value) {
            params.set('value', newFilter.value);
        }
        
        // Update URL without page reload
        const newUrl = params.toString() ? `?${params.toString()}` : '/Products-Solutions';
        router.push(newUrl, { scroll: false });
        
        // Scroll to SearchBar after filter change
        setTimeout(() => {
            if (searchBarRef.current) {
                searchBarRef.current.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    };

    return(
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(collectionPageJsonLd),
                }}
            />

            <BreadCrumb 
                pageTitle="Products & Solutions"
                breadCrumbBg="/images/Products/breadcrumb.jpg"
            />
            <div className="container mx-auto ">
                <div ref={categoryNavRef}>
                    <CategoryNav 
                        onFilterChange={handleFilterChange} 
                        initialTab={initialTab}
                        initialValue={initialValue}
                    />
                </div>
                <div ref={searchBarRef}>
                    <SearchBar onSearchResults={setSearchResults} />
                </div>
                <ProductGrid filter={filter} searchResults={searchResults} />
            </div>
        </>
    )
}
export default function Products() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        }>
            <ProductsContent />
        </Suspense>
    )
}
