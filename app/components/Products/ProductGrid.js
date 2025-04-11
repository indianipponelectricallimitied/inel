'use client';
import { useState, useEffect } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';


const ProductGrid = ({ filter, searchResults }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products when component mounts
    fetch('https://inelbackend-fccmbmfjbhewhbhh.centralindia-01.azurewebsites.net/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    // If there are search results, use them instead of filter
    if (searchResults) {
      setFilteredProducts(searchResults);
      return;
    }

    // Otherwise, apply category/type filters
    if (filter.type === 'all') {
      setFilteredProducts(products);
    } else if (filter.type === 'vehicle') {
      const filtered = products.filter(product =>
        product.vehicleCategories.includes(filter.value)
      );
      setFilteredProducts(filtered);
    } else if (filter.type === 'productType') {
      const filtered = products.filter(product =>
        product.type === filter.value
      );
      setFilteredProducts(filtered);
    }
  }, [filter, products, searchResults]);

  return (
    <div className="grid grid-cols-2  lg:grid-cols-3 gap-3 gap-y-4 md:gap-6 my-20">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col items-start justify-between border border-black  rounded-[10px] p-4  product-grid-item group
          transition-all duration-200 hover:product-gradient hover:border-primary hover:shadow-[0px 0px 40px -16px #578EFFC7]
          hover:text-white
          "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-28 md:h-48 object-contain"
            />
            <div className='flex items-end justify-between gap-1  w-full'>
              <h2 className="text-sm md:text-xl font-medium mt-2 md:w-1/2">{product.name}</h2>
              <Link href={`/products/${product.id}`} className='bg-white rounded-[40px] px-2 py-1 md:px-6 md:py-2 border border-black   group-hover:border-transparent'>
                <GoArrowUpRight className='text-xs md:text-lg text-primary' />
              </Link>
            </div>
            {/* <p className="text-gray-600">{product.type}</p>
            <p className="text-sm mt-2">{product.description}</p> */}
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-8 text-gray-500">
          Nothing found for your search
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
