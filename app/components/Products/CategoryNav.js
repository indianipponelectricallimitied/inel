"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ApiService from '@/app/services/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { usePathname, useSearchParams } from 'next/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const CategoryNav = ({ onFilterChange, initialTab = 'all', initialValue = null, compact = false }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState(initialTab);
    const [activeSubCategory, setActiveSubCategory] = useState(null);
    const [vehicleCategories, setVehicleCategories] = useState([]);
    const [productTypes, setProductTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const hasProcessedInitialValues = useRef(false);
    const swiperRef = useRef(null);

    // Fetch data on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [vehicleData, productData] = await Promise.all([
                    ApiService.getVehicleCategories(),
                    ApiService.getProductTypes()
                ]);

                // Sort vehicle categories by order field (0 to increasing)
                const sortedVehicleData = vehicleData.sort((a, b) => {
                    const orderA = a.order !== undefined ? a.order : 999;
                    const orderB = b.order !== undefined ? b.order : 999;
                    return orderA - orderB;
                });

                // Sort product types by order field (0 to increasing)
                const sortedProductData = productData.sort((a, b) => {
                    const orderA = a.order !== undefined ? a.order : 999;
                    const orderB = b.order !== undefined ? b.order : 999;
                    return orderA - orderB;
                });

                setVehicleCategories(sortedVehicleData);
                setProductTypes(sortedProductData);
                setLoading(false);
                
                // Only set default selections if no URL parameters are provided
                if (!initialValue) {
                    // If no initial value is provided, show all products
                    if (initialTab === 'all') {
                        onFilterChange({ type: 'all' });
                    } else {
                        // Auto-select first category/type when data loads (only if no URL params)
                        if (sortedVehicleData.length > 0 && activeTab === 'category') {
                            setActiveSubCategory(sortedVehicleData[0].name);
                            onFilterChange({ type: 'vehicle', value: sortedVehicleData[0].name });
                        } else if (sortedProductData.length > 0 && activeTab === 'type') {
                            setActiveSubCategory(sortedProductData[0].name);
                            onFilterChange({ type: 'productType', value: sortedProductData[0].name });
                        }
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load data. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Only fetch data on mount

    // Handle URL-based filtering when component mounts or initial values change
    useEffect(() => {
        if (!loading && !hasProcessedInitialValues.current && initialTab && initialValue) {
            hasProcessedInitialValues.current = true;
            
            // Set the active tab based on URL parameters
            if (initialTab === 'category' || initialTab === 'type') {
                setActiveTab(initialTab);
                setActiveSubCategory(initialValue);
                
                // Apply the filter
                const filterType = initialTab === 'category' ? 'vehicle' : 'productType';
                onFilterChange({
                    type: filterType,
                    value: initialValue
                });
            }
        } else if (!loading && !hasProcessedInitialValues.current && initialTab === 'all') {
            hasProcessedInitialValues.current = true;
            // Handle 'all' tab
            setActiveTab('all');
            setActiveSubCategory(null);
            onFilterChange({ type: 'all' });
        }
    }, [loading, initialTab, initialValue]);

    // Listen for route changes and update component state
    useEffect(() => {
        if (!loading) {
            const type = searchParams.get('type');
            const value = searchParams.get('value');
            
            if (type && value) {
                // Decode the value to handle URL encoding
                const decodedValue = decodeURIComponent(value);
                
                if (type === 'productType') {
                    setActiveTab('type');
                    setActiveSubCategory(decodedValue);
                    onFilterChange({
                        type: 'productType',
                        value: decodedValue
                    });
                } else if (type === 'vehicle') {
                    setActiveTab('category');
                    setActiveSubCategory(decodedValue);
                    onFilterChange({
                        type: 'vehicle',
                        value: decodedValue
                    });
                }
            } else {
                // No URL parameters, show all products
                setActiveTab('all');
                setActiveSubCategory(null);
                onFilterChange({ type: 'all' });
            }
        }
    }, [pathname, searchParams, loading]);

    // Scroll to active slide when activeSubCategory changes
    useEffect(() => {
        if (swiperRef.current && activeSubCategory && !loading) {
            const swiper = swiperRef.current.swiper;
            if (swiper) {
                // Find the index of the active subcategory
                let targetIndex = -1;
                
                if (activeTab === 'category') {
                    targetIndex = vehicleCategories.findIndex(cat => cat.name === activeSubCategory);
                } else if (activeTab === 'type') {
                    targetIndex = productTypes.findIndex(type => type.name === activeSubCategory);
                }
                
                if (targetIndex !== -1) {
                    // Get current slides per view
                    const slidesPerView = swiper.params.slidesPerView;
                    const totalSlides = activeTab === 'category' ? vehicleCategories.length : productTypes.length;
                    
                    // Calculate the center position
                    let centerIndex = targetIndex;
                    
                    // If the target is near the beginning, center it
                    if (targetIndex < slidesPerView / 2) {
                        centerIndex = 0;
                    }
                    // If the target is near the end, position it at the end
                    else if (targetIndex >= totalSlides - slidesPerView / 2) {
                        centerIndex = totalSlides - slidesPerView;
                    }
                    // Otherwise, center the target slide
                    else {
                        centerIndex = targetIndex - Math.floor(slidesPerView / 2);
                    }
                    
                    // Ensure centerIndex is within bounds
                    centerIndex = Math.max(0, Math.min(centerIndex, totalSlides - slidesPerView));
                    
                    // Scroll to the calculated position
                    swiper.slideTo(centerIndex, 300);
                }
            }
        }
    }, [activeSubCategory, activeTab, vehicleCategories, productTypes, loading]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setActiveSubCategory(null);
        
        // Set default filter based on tab
        if (tab === 'all') {
            onFilterChange({ type: 'all' });
        } else if (tab === 'category') {
            onFilterChange({ type: 'vehicle', value: vehicleCategories[0]?.name || '' });
        } else if (tab === 'type') {
            onFilterChange({ type: 'productType', value: productTypes[0]?.name || '' });
        }
    };

    const handleSubCategoryClick = (subCategory) => {
        setActiveSubCategory(subCategory);
        
        if (activeTab === 'category') {
            onFilterChange({ type: 'vehicle', value: subCategory });
        } else if (activeTab === 'type') {
            onFilterChange({ type: 'productType', value: subCategory });
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (compact) {
        return (
            <div className="transition-all duration-500">
                {/* Compact Main Tabs - All, Type and Category */}
                <div className="flex gap-2 justify-center py-4">
                    {['all', 'category', 'type'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`py-1 px-3 text-sm rounded-md transition-all ${
                                activeTab === tab
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Compact Sub Categories */}
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {activeTab === 'category' &&
                            vehicleCategories.slice(0, 4).map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => handleSubCategoryClick(category.name)}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all ${
                                        activeSubCategory === category.name
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    <span>{category.name}</span>
                                </button>
                            ))}
                       
                        {activeTab === 'type' &&
                            productTypes.slice(0, 6).map((type) => (
                                <button
                                    key={type.name}
                                    onClick={() => handleSubCategoryClick(type.name)}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all ${
                                        activeSubCategory === type.name
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    <span>{type.name}</span>
                                </button>
                            ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="transition-all duration-500">
            {/* Main Tabs - All, Type and Category */}
            <div className="flex gap-4 justify-center py-10">
                {['all', 'category', 'type'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`py-2 ${
                            activeTab === tab
                                ? 'corner-btn'
                                : 'w-[130px]'
                        }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Sub Categories Swiper */}
                <div className="mb-10">
                    <Swiper
                        ref={swiperRef}
                        modules={[ Pagination]}
                        spaceBetween={16}
                        slidesPerView={2}
                        pagination={{ 
                            clickable: true,
                        }}
                        breakpoints={{
                             
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 16,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 16,
                            },
                        }}
                        className="category-swiper pb-10"
                    >
                        {activeTab === 'category' &&
                            vehicleCategories.slice(0, 4).map((category) => (
                                <SwiperSlide key={category.name}>
                                    <button
                                        onClick={() => handleSubCategoryClick(category.name)}
                                        className={`w-full flex flex-col lg:flex-row  items-center justify-between px-3 rounded-lg transition-all hover-product-gradient hover:text-white relative group h-40
                                            ${
                                                activeSubCategory === category.name
                                                    ? 'product-gradient text-white'
                                                    : 'bg-[#D9D9D9] hover:bg-gray-200'
                                            }`}
                                    >
                                        <span className='text-[100px] text-white font-bold opacity-20 absolute top-0 right-0 inset-0 flex items-center justify-center'>
                                            {category.shortName}
                                        </span>
                                        <span className="font-medium text-left text-xl z-10">
                                            {category.name}
                                        </span>
                                        
                                        <div className={`w-full h-28 lg:h-32 relative transition-all duration-300`}>
                                            <Image
                                                src={category.img}
                                                alt={category.name}
                                                fill
                                                className={`w-full object-contain transition-all group-hover:-translate-y-4 duration-300 ${activeSubCategory === category.name ? '-translate-y-4' : ''}`}
                                            />
                                        </div>
                                    </button>
                                </SwiperSlide>
                            ))}
                       
                        {activeTab === 'type' &&
                            productTypes.map((type) => (
                                <SwiperSlide key={type.name}>
                                    <button
                                        onClick={() => handleSubCategoryClick(type.name)}
                                        className={`w-full flex flex-col lg:flex-row  p-2 items-center justify-between px-3 rounded-lg transition-all hover-product-gradient hover:text-white relative group h-40
                                            ${
                                                activeSubCategory === type.name
                                                    ? 'product-gradient text-white'
                                                    : 'bg-[#D9D9D9] hover:bg-gray-200'
                                            }`}
                                    >
                                        <span className='text-[100px] text-white font-bold opacity-20 absolute top-0 right-0 inset-0 flex items-center justify-center'>
                                            {type.shortName}
                                        </span>
                                        <span className="font-medium text-left text-xl z-10">
                                            {type.name}
                                        </span>
                                        
                                        <div className={`w-full  h-28 lg:h-32   relative transition-all duration-300`}>
                                            <Image
                                                src={type.img}
                                                alt={type.name}
                                                fill
                                                className={`w-full object-contain transition-all group-hover:-translate-y-4 duration-300 ${activeSubCategory === type.name ? '-translate-y-4' : ''}`}
                                            />
                                        </div>
                                    </button>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            <span className='w-full h-10 relative z-20 bg-white block'></span>

            <style jsx>{`
                .category-swiper .swiper-wrapper{
                    margin-bottom: 20px;
                }
            `}</style>
        </div>
    );
};

export default CategoryNav;
