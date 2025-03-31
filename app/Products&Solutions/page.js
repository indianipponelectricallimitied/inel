'use client';
import { useState } from 'react';
import BreadCrumb from "../components/Ui/bread-crumb";
import CategoryNav from "../components/Products/CategoryNav";
import SearchBar from "../components/Products/SearchBar";
import ProductGrid from "../components/Products/ProductGrid";

export default function Products() {
    const [filter, setFilter] = useState({ type: 'all' });
    const [searchResults, setSearchResults] = useState(null);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setSearchResults(null); // Clear search results when changing filters
    };

    return(
        <>
            <BreadCrumb 
                pageTitle="Products & Solutions"
                breadCrumbBg="/images/ProductsSolutions/breadcrumb.png"
            />
            <div className="container mx-auto px-5 md:px-10">
                <CategoryNav onFilterChange={handleFilterChange} />
                <SearchBar onSearchResults={setSearchResults} />
                <ProductGrid filter={filter} searchResults={searchResults} />
            </div>
        </>
    )
}