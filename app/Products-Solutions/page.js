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

    // Auto-scroll to CategoryNav on page load
    useEffect(() => {
        const timer = setTimeout(() => {
            if (categoryNavRef.current) {
                categoryNavRef.current.scrollIntoView({ 
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
    };

    return(
        <>
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
                <SearchBar onSearchResults={setSearchResults} />
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