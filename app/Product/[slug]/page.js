'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Button from '@/app/components/Ui/button';
import { GoArrowDown } from "react-icons/go";

import ApiService from '@/app/services/api';
import FeaturesSlider from './features-slider';
import GridGenerator from './grid-generator';
import VehicleCategories from './vehicleCategories';
import RelatedProducts from './related-products';
import Newsletter from "../../components/Common/newsletter";

const BASE_URL = "https://inelbackend.vercel.app/";

export default function ProductPage() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const products = await ApiService.getProducts();
                const product = products.find(p => p.id === params.slug);
                setProduct(product);
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

    // const graphUrl = product.graph
    //     ? (product.graph.startsWith('http') ? product.graph : `${BASE_URL}${product.graph}`)
    //     : null;
    const pdfUrl = product.pdf
        ? (product.pdf.startsWith('http') ? product.pdf : `${BASE_URL}${product.pdf}`)
        : "#";

    // Check if features data exists and is non-empty
    // const hasFeatures =
    //     product.features &&
    //     typeof product.features === 'object' &&
    //     Object.keys(product.features).length > 0;

    return (
        <>
            <div className="grid-with-gradients">
                <div className="gradient-sphere w-[800px] h-[800px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" ></div>
                <div className="container mx-auto px-5 py-20 ">
                    <h1 className='text-center lg:text-[62px]'>{product.name}</h1>
                    <Image src={product.image} alt={product.name} width={500} height={500}
                        className='mx-auto py-20 max-h-[500px] object-contain'/>
                    <p className='text-justify md:text-center md:w-[75%] mx-auto'>{product.description}</p>
                </div>
            </div>

            {/* {hasFeatures && (
                <section className='bg-[url(/images/Products/featuresbg.png)] bg-cover bg-center' > 
                    <div className='container mx-auto px-5 py-20'>
                        <h1 className="text-white text-center">Features & Benefits</h1>
                        <FeaturesSlider features={product.features} />
                    </div>
                </section>
            )}

            <div className="grid-with-gradients">
                <div className="gradient-sphere w-[800px] h-[800px] -top-[400px] -right-[400px]" ></div>
                <div className="gradient-sphere w-[800px] h-[800px] -bottom-[400px] -left-[400px]" ></div>
                <div className='container mx-auto px-5 py-20 pb-32'>
                    <h1 className="text-center pb-16">Specifications</h1>
                    <GridGenerator grid={product.specifications} image={product.image} />
                </div>
            </div> */}

            {/* {graphUrl && (
                <section className='diamond-gradient'>  
                    <div className='container mx-auto px-5 py-20'>
                        <h1 className='text-white text-center pb-16'>Performance Graph</h1>
                        <Image src={graphUrl} alt={product.name} width={15000} height={15000}
                            className='mx-auto max-h-[500px] object-contain'/>
                    </div>
                </section>
            )} */}

            {/* Hide VehicleCategories section if product.id === "EMS" */}
            {product.id !== "EMS" && (
                <VehicleCategories vehicleCategories={product.vehicleCategories} />
            )}

            <section className='diamond-gradient1'>
                <div className='container mx-auto px-5 py-20'>
                    <h1 className='text-white w-full md:w-4/5'>Discover high-performance solutions designed 
                    for efficiency and reliability.</h1>
                    
                    <div className='flex items-center gap-2 mt-10'>
                        <Button href="/contact-us" 
                            variant="blue" 
                            className="w-fit !bg-[#FCFCFC47] border-0">
                            Enquire Now
                        </Button>
                        {/* <a 
                            href={pdfUrl} 
                            target='_blank' 
                            className='flex items-center gap-1 rounded-[10px] border-0 text-white border-primary py-2 px-5 w-fit bg-[#FCFCFC47]'
                        >
                            Download DataSheet
                            <GoArrowDown className='text-[20px]' />
                        </a> */}
                    </div>
                </div>
            </section>

            {/* <RelatedProducts currentProductId={product.id} type={product.type} /> */}


            {/* <Newsletter /> */}
        </>
    );
}