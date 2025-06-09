// 'use client';
// import { useState, useEffect } from "react";
// import { FiSearch } from "react-icons/fi";
// import { useSearchParams } from 'next/navigation';
// import { Suspense } from 'react';
// import ApiService from '@/app/services/api';

// // Separate Search component for Suspense
// function Search({ onSearchChange, onSubmit, initialValue = "" }) {
//     const searchParams = useSearchParams();
//     const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || initialValue);

//     const handleChange = (e) => {
//         const value = e.target.value;
//         setSearchTerm(value);
//         onSearchChange(value);
//     };

//     return (
//         <form 
//             onSubmit={onSubmit}
//             className="flex justify-between items-center bg-white py-1 p-[3px] md:w-2/4 mx-auto mb-8 rounded-[10px] border border-black"
//         >
//             <input 
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleChange}
//                 placeholder="Search Products..." 
//                 className="bg-white text-black border-0 w-full focus-visible:outline-none border-white p-2" 
//             />
//             <button 
//                 type="submit" 
//                 className="bg-primary text-white py-4 px-6 rounded-[8px]"
//             >
//                 <FiSearch className="text-3xl" />
//             </button>
//         </form>
//     );
// }

// export default function SearchBar({ onSearchResults }) {
//     const [products, setProducts] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");

//     useEffect(() => {
//         ApiService.getProducts()
//             .then(products => setProducts(products))
//             .catch(error => console.error('Error loading products:', error));
//     }, []);

//     // Function to calculate similarity between two strings
//     const calculateSimilarity = (str1, str2) => {
//         const s1 = str1.toLowerCase();
//         const s2 = str2.toLowerCase();
        
//         // Check if one string contains the other
//         if (s1.includes(s2) || s2.includes(s1)) {
//             return true;
//         }

//         // Split search term into words for partial matches
//         const searchWords = s1.split(' ');
//         const targetWords = s2.split(' ');

//         // Check if any word matches partially
//         return searchWords.some(word => 
//             word.length > 2 && // Only check words longer than 2 characters
//             targetWords.some(targetWord => 
//                 targetWord.includes(word) || word.includes(targetWord)
//             )
//         );
//     };

//     const handleSearch = (e) => {
//         e.preventDefault();
        
//         if (!searchTerm.trim()) {
//             onSearchResults(products); // Show all products if search is empty
//             return;
//         }

//         const searchResults = ApiService.searchProducts(products, searchTerm);
//         onSearchResults(searchResults);
//     };

//     return (
//         <Suspense fallback={
//             <div className="flex justify-between items-center bg-white py-1 p-[3px] md:w-2/4 mx-auto mb-8 rounded-[10px] border border-black animate-pulse">
//                 <div className="h-10 w-full bg-gray-200 rounded"></div>
//             </div>
//         }>
//             <Search 
//                 onSearchChange={setSearchTerm}
//                 onSubmit={handleSearch}
//                 initialValue={searchTerm}
//             />
//         </Suspense>
//     );
// }

