'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import BreadCrumb from "../components/Ui/bread-crumb";
import CategoryNav from "../components/Products/CategoryNav";
import SearchBar from "../components/Products/SearchBar";
import ProductGrid from "../components/Products/ProductGrid";

export default function Products() {
    const [filter, setFilter] = useState({ type: 'all' });
    const [searchResults, setSearchResults] = useState(null);
    const searchParams = useSearchParams();
    const router = useRouter();

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
        const newUrl = params.toString() ? `?${params.toString()}` : '/Products&Solutions';
        router.push(newUrl, { scroll: false });
    };

    return(
        <>
            <BreadCrumb 
                pageTitle="Products & Solutions"
                breadCrumbBg="/images/Products/breadcrumb.jpg"
            />
            <div className="container mx-auto ">
                <CategoryNav 
                    onFilterChange={handleFilterChange} 
                    initialTab={initialTab}
                    initialValue={initialValue}
                />
                <SearchBar onSearchResults={setSearchResults} />
                <ProductGrid filter={filter} searchResults={searchResults} />
            </div>
        </>
    )
}