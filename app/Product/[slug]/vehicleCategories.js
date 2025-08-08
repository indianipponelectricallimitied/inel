import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function VehicleCategories({vehicleCategories}){
    // Handle both old array format and new object format
    let categoriesToDisplay = [];
    
    if (Array.isArray(vehicleCategories)) {
        // Old format: array of category names
        categoriesToDisplay = vehicleCategories.map(categoryName => ({
            name: categoryName,
            app_img: `/images/Products/${categoryName.toLowerCase().replace(/\s+/g, '-')}.png`
        }));
    } else if (vehicleCategories && typeof vehicleCategories === 'object') {
        // New format: object with category names as keys and image URLs as values
        categoriesToDisplay = Object.entries(vehicleCategories).map(([categoryName, imageUrl]) => ({
            name: categoryName,
            app_img: imageUrl
        }));
    }

    return (
        <div className="w-full">
            <div className="container mx-auto px-4 pb-20 pt-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="w-full gap-5">
                    <h1 className='w-full md:w-3/6'>Engineered for  Diverse Applications</h1>
                    </div>
                    
                    <div className="w-full lg:w-3/6">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ 
                                clickable: true,
                                dynamicBullets: true
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            className="vehicle-categories-swiper"
                        >
                            {categoriesToDisplay.map((category, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full md:w-44 h-44 lg:w-52 lg:h-52 relative rounded-[10px]">
                                        <Image 
                                            src={category.app_img || '/images/Products/bike.jpg'} 
                                            alt={category.name}
                                            fill
                                            className="object-cover rounded-[10px]"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .vehicle-categories-swiper .swiper-pagination {
                    position: relative;
                    margin-top: 20px;
                }
                .vehicle-categories-swiper .swiper-pagination-bullet {
                    background: #ccc;
                    opacity: 0.5;
                }
                .vehicle-categories-swiper .swiper-pagination-bullet-active {
                    background: #007bff;
                    opacity: 1;
                }
            `}</style>
        </div>
    );
}
