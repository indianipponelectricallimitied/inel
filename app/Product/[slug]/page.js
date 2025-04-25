'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';


import FeaturesSlider from './features-slider';
import GridGenerator from './grid-generator';
import VehicleCategories from './vehicleCategories';

export default function ProductPage() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://inelbackend-fccmbmfjbhewhbhh.centralindia-01.azurewebsites.net/api/products/${params.slug}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [params.slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl text-gray-600">Product not found</h1>
            </div>
        );
    }



  



    return (
        <>
            <div className="grid-with-gradients">
            <div className="gradient-sphere w-[800px] h-[800px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" ></div>
            <div className="container mx-auto px-5 py-20 ">
                    <h1 className='text-center text-[70px]'>{product.name}</h1>
                    <Image src={product.image} alt={product.name} width={500} height={500}
                    className='mx-auto py-20 max-h-[500px] object-contain'/>
                    <p className='text-center w-[75%] mx-auto'>{product.description}</p>
            </div>
            </div>


            <div className='diamond-gradient'>
                <div className='container mx-auto px-5 py-20'>
                    <h1 className="text-white text-center">Features & Benefits</h1>
                    <FeaturesSlider features={product.features} />  
                </div>
            </div>

            
            <div className="grid-with-gradients">
            <div className="gradient-sphere w-[800px] h-[800px] -top-[400px] -right-[400px]" ></div>
                <div className='container mx-auto px-5 py-20'>
                    <h1 className="text-center pb-16">Specifications</h1>
                    <GridGenerator grid={product.specifications} image={product.image} />
                </div>
            </div>

            <div className='diamond-gradient'>  
                <div className='container mx-auto px-5 py-20'>
                    <h1 className='text-white text-center pb-16'>Performance Graph</h1>
                    <Image src={product.performance_graph || "/images/Products/graph.png"} alt={product.name} width={15000} height={15000}
                    className='mx-auto max-h-[500px] object-contain'/>
                </div>
            </div>

            <VehicleCategories vehicleCategories={product.vehicleCategories} />
          
        </>
    );
}