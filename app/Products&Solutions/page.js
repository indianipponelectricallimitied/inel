'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import BreadCrumb from "../components/Ui/bread-crumb";
import CategoryNav from "../components/Products/CategoryNav";
import SearchBar from "../components/Products/SearchBar";
import ProductGrid from "../components/Products/ProductGrid";
import { Suspense } from 'react';
export default function Products() {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    // Initialize state from URL parameters
    const initialType = searchParams.get('type') || 'all';
    const initialValue = searchParams.get('value') || null;
    
    const [filter, setFilter] = useState({ 
        type: initialType,
        value: initialValue
    });
    const [searchResults, setSearchResults] = useState(null);

    const handleFilterChange = (newFilter) => {
        // Only update if the filter actually changed
        if (filter.type !== newFilter.type || filter.value !== newFilter.value) {
            setFilter(newFilter);
            setSearchResults(null); // Clear search results when changing filters
            
            // Update URL parameters without scrolling
            const params = new URLSearchParams(searchParams);
            if (newFilter.type !== 'all') {
                params.set('type', newFilter.type === 'vehicle' ? 'category' : 'type');
                if (newFilter.value) {
                    params.set('value', newFilter.value);
                }
            } else {
                params.delete('type');
                params.delete('value');
            }
            const newUrl = params.toString() ? `?${params.toString()}` : '';
            router.replace(`/Products&Solutions${newUrl}`, { scroll: false });
        }
    };

    return(
        <>
            <BreadCrumb 
                pageTitle="Products & Solutions"
                breadCrumbBg="/images/Products/breadcrumb.jpeg"
            />
            <div className="container mx-auto ">
                <CategoryNav 
                    onFilterChange={handleFilterChange}
                    initialTab={initialType}
                    initialValue={initialValue}
                />
                <Suspense fallback={<div>Loading...</div>}>
                    <SearchBar onSearchResults={setSearchResults} />
                </Suspense>
                <ProductGrid filter={filter} searchResults={searchResults} />
            </div>
        </>
    )
}