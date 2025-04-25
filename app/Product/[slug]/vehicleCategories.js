import Image from 'next/image';

export default function VehicleCategories({vehicleCategories}){
    // Mapping of categories to their respective images
    const categoryImages = {
        "2 Wheeler": "/images/Products/bike.jpg",
        "3 Wheeler": "/images/Products/auto.jpg",
        "4 Wheeler": "/images/Products/4wheeler.png",
        "Snow Mobile": "/images/Products/snow-mobile.png",
        "ATV": "/images/Products/atv.jpg",
        "Golf Cart": "/images/Products/golfcart.png"
    };

    return(
                <>
                    {vehicleCategories.map((category, index) => (
                        <div key={index} 
                            className="">
                            <div className="w-full h-40 relative">
                                <Image 
                                    src={categoryImages[category] || '/images/categories/default.png'} 
                                    alt={category}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            {/* <h2 className="text-xl md:text-2xl font-medium text-[#5F5F5F]">{category}</h2> */}
                        </div>
                    ))}
              </>

    )
}
