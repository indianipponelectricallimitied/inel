'use client';
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onSearchResults }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error('Error loading products:', error));
    }, []);

    // Function to calculate similarity between two strings
    const calculateSimilarity = (str1, str2) => {
        const s1 = str1.toLowerCase();
        const s2 = str2.toLowerCase();
        
        // Check if one string contains the other
        if (s1.includes(s2) || s2.includes(s1)) {
            return true;
        }

        // Split search term into words for partial matches
        const searchWords = s1.split(' ');
        const targetWords = s2.split(' ');

        // Check if any word matches partially
        return searchWords.some(word => 
            word.length > 2 && // Only check words longer than 2 characters
            targetWords.some(targetWord => 
                targetWord.includes(word) || word.includes(targetWord)
            )
        );
    };

    const handleSearch = (e) => {
        e.preventDefault();
        
        if (!searchTerm.trim()) {
            onSearchResults(products); // Show all products if search is empty
            return;
        }

        const searchResults = products.filter(product => {
            // Search in multiple fields
            const searchFields = [
                product.name,
                product.type,
                product.description,
                ...(product.features || []),
                ...(product.vehicleCategories || [])
            ];

            // Check each field for similarity
            return searchFields.some(field => 
                field && calculateSimilarity(searchTerm, field)
            );
        });

        // Sort results by relevance
        const sortedResults = searchResults.sort((a, b) => {
            const aRelevance = calculateSimilarity(searchTerm, a.name) ? 2 : 1;
            const bRelevance = calculateSimilarity(searchTerm, b.name) ? 2 : 1;
            return bRelevance - aRelevance;
        });

        onSearchResults(sortedResults);
    };

    return(
        <form 
            onSubmit={handleSearch}
            className="flex justify-between items-center my-10 bg-white py-1 p-[3px] md:w-2/4 mx-auto mb-8 rounded-[10px] border border-black"
        >
            <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Products..." 
                className="bg-white text-black border-0 w-full focus-visible:outline-none border-white p-2" 
            />
            <button 
                type="submit" 
                className="bg-primary text-white py-4 px-6 rounded-[8px]"
            >
                <FiSearch className="text-3xl" />
            </button>
        </form>
    );
}

