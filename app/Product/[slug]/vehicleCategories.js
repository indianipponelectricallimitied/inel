import Image from 'next/image';

export default function VehicleCategories({vehicleCategories}){
    // Mapping of categories to their respective images
    const categoryImages = {
        "2 Wheeler": "/images/Products/bike.jpg",
        "3 Wheeler": "/images/Products/auto.jpg",
        "4 Wheeler": "/images/Products/4wheeler.png",
        "Snow Mobile": "/images/Products/snow-mobile.png",
        "ATV": "/images/Products/atv.jpg",
        "Commercial": "/images/Products/truck.png",
        "Golf Cart": "/images/Products/golfcart.png"
    };

    // Take only the first 3 categories
    const limitedCategories = vehicleCategories.slice(0, 3);

    return(
                <>
                <section className='py-28 grid-for-categories'>
                    <div className='container flex flex-col md:flex-row md:gap-5 gap-16 items-center justify-between mx-auto'>
                        <h1 className='w-full md:w-1/3'>Engineered for  Diverse Applications</h1>
                        <div className="w-full md:w-2/3 flex justify-end gap-5 ">
                            {limitedCategories.map((category, index) => (
                            <div key={index} className="w-full md:w-44 h-44 lg:w-52 lg:h-52 relative rounded-[10px]">
                                <Image 
                                    src={categoryImages[category] || '/images/categories/default.png'} 
                                    alt={category}
                                    fill
                                    className="object-cover rounded-[10px] "
                                />
                            </div>
                            ))}
                        </div>
                    </div>
                    <style jsx>{`
                        .grid-for-categories {
                            width: 100%;
                            height: 100%;
                            position: relative;
                            background-image: 
                                linear-gradient(to right, #f7f7f794 1px, transparent 1px),
                                linear-gradient(to bottom, #f7f7f794 1px, transparent 1px);
                            background-size: 50px 50px;
                            overflow: hidden;
                            }
                    `}</style>
                </section>
                    
                    
              </>

    )
}
