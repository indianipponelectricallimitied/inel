'use client';

import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import ApiService from '@/app/services/api';
import { useState, useEffect } from 'react';

export default function FeaturedProducts() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await ApiService.getProducts();
                setFeaturedProducts(products.slice(0, 4));
            } catch (error) {
                console.error('Error fetching featured products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="animate-pulse flex flex-col items-start justify-between border border-black rounded-[10px] p-4">
                        <div className="bg-gray-200 w-full h-28 md:h-40 rounded-lg"></div>
                        <div className="flex items-end justify-between gap-1 w-full mt-2">
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.length > 0 ? featuredProducts.map((product) => (
                <div 
                    key={product.id} 
                    className="flex flex-col items-start justify-between border border-black rounded-[10px] p-4"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-28 md:h-40 object-contain"
                    />
                    <div className='flex items-end justify-between gap-1 w-full'>
                        <h2 className="text-sm md:text-xl font-medium mt-2 md:w-1/2">{product.name}</h2>
                        <Link href={`/product/${product.id}`} className='bg-white rounded-[40px] px-2 py-1 md:px-6 md:py-1 border border-black'>
                            <GoArrowUpRight className='text-xs md:text-lg text-primary' />
                        </Link>
                    </div>
                </div>
            )) : <p>No products found</p>}
        </div>
    );
}
