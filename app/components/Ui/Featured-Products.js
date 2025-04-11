import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default async function FeaturedProducts(){

    const data = await fetch('https://inelbackend-fccmbmfjbhewhbhh.centralindia-01.azurewebsites.net/api/products')
    const response = await data.json()
    
    // Ensure we're working with an array of products
    const products = Array.isArray(response) ? response : Array.isArray(response.products) ? response.products : []
    
    // Limit to only the first 4 products (indices 0-3)
    const featuredProducts = products.slice(0, 4)

    return(
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {featuredProducts.length > 0 ? featuredProducts.map((product, index) => (
                    <div key={product.id} className="flex flex-col items-start justify-between border border-black  rounded-[10px] p-4"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-28 md:h-40 object-contain"
                      />
                      <div className='flex items-end justify-between gap-1  w-full'>
                        <h2 className="text-sm md:text-xl font-medium mt-2 md:w-1/2">{product.name}</h2>
                        <Link href={`/products/${product.id}`} className='bg-white rounded-[40px] px-2 py-1 md:px-6 md:py-1 border border-black'>
                          <GoArrowUpRight className='text-xs md:text-lg text-primary' />
                        </Link>
                      </div>
                    </div>
                )) : <p>No products found</p>}
            </div>
        </>
    )
}
