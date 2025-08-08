'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import ApiService from '@/app/services/api';
import Button from '@/app/components/Ui/button';
export default function RelatedProducts({ currentProductId, type }) {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchRelatedProducts = async () => {
            if (!type) {
                setLoading(false);
                return;
            }

            try {
                console.log('Fetching products for type:', type);
                const products = await ApiService.getProducts();
                
                if (isMounted) {
                    // Use ApiService's filter method and limit to 3 products
                    const filtered = ApiService.filterProductsByType(products, type)
                        .filter(product => product.id !== currentProductId)
                        .slice(0, 3);
                    setRelatedProducts(filtered);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching related products:', error);
                if (isMounted) {
                    setError(error.message);
                    setLoading(false);
                }
            }
        };

        setLoading(true);
        fetchRelatedProducts();

        return () => {
            isMounted = false;
        };
    }, [type, currentProductId]);

    // Show error state
    if (error) {
        return (
            <div className="container mx-auto px-5 py-10 text-center">
                <p>Failed to load related products. Please try again later.</p>
            </div>
        );
    }

    // Show loading state
    if (loading) {
        return (
            <div className="container mx-auto px-5 py-10">
                <h2 className="text-3xl font-bold text-center mb-10">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((placeholder) => (
                        <div key={placeholder} className="animate-pulse">
                            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (!relatedProducts.length) {
        return null;
    }

    return (
        <section className="container mx-auto px-5 py-20">
            <h1 className="text-center ">Related Products</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:w-4/5 mx-auto gap-5 py-20">
                {relatedProducts.map((product) => (
                    <div 
                    key={product.id} 
                    className="border border-black  rounded-[10px] p-4 flex flex-col gap-3 items-start justify-between">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={500}
                                height={500}
                                className="w-full h-28 md:h-40 object-contain"
                            />
                            <div className='flex items-end justify-between gap-1  w-full'>
                                <h2 className="text-sm md:text-xl font-medium mt-2 md:w-2/3">{product.name}</h2>
                                <Link href={`/product/${product.id}`} className='bg-white rounded-[40px] px-2 py-1 md:px-6 md:py-2 border border-black'>
                                <GoArrowUpRight className='text-xs md:text-lg text-primary' />
                                </Link>
                            </div>
                    </div>
                ))} 
            </div>
            <Button href="/Products-Solutions" 
                variant="blue" 
                className="w-fit mx-auto border-0">
                All Products
            </Button>
        </section>
    );

}
