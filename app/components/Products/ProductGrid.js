'use client';
import { useState, useEffect } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';
import ApiService from '@/app/services/api';

const ProductGrid = ({ filter, searchResults, compact = false }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products when component mounts
    ApiService.getProducts()
      .then(products => {
        // Sort products by order field (0 to increasing)
        const sortedProducts = products.sort((a, b) => {
          const orderA = a.order !== undefined ? a.order : 999;
          const orderB = b.order !== undefined ? b.order : 999;
          return orderA - orderB;
        });
        
        setProducts(sortedProducts);
        setFilteredProducts(sortedProducts);
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
    let filtered = [];
    if (filter.type === 'vehicle') {
      filtered = ApiService.filterProductsByVehicleCategory(products, filter.value);
      
      // Apply special sorting for Scooter vehicle category
      if (filter.value === 'Scooter') {
        filtered = filtered.sort((a, b) => {
          const orderA = a.scooter_order !== undefined ? a.scooter_order : 999;
          const orderB = b.scooter_order !== undefined ? b.scooter_order : 999;
          return orderA - orderB;
        });
      } else {
        // Use regular order field for other vehicle categories
        filtered = filtered.sort((a, b) => {
          const orderA = a.order !== undefined ? a.order : 999;
          const orderB = b.order !== undefined ? b.order : 999;
          return orderA - orderB;
        });
      }
    } else if (filter.type === 'productType') {
      filtered = ApiService.filterProductsByType(products, filter.value);
      
      // Apply special sorting for e-Mobility products
      if (filter.value === 'e-Mobility') {
        filtered = filtered.sort((a, b) => {
          const orderA = a.scooter_order !== undefined ? a.scooter_order : 999;
          const orderB = b.scooter_order !== undefined ? b.scooter_order : 999;
          return orderA - orderB;
        });
      } else {
        // Use regular order field for other product types
        filtered = filtered.sort((a, b) => {
          const orderA = a.order !== undefined ? a.order : 999;
          const orderB = b.order !== undefined ? b.order : 999;
          return orderA - orderB;
        });
      }
    } else {
      // Default to showing all products if no specific filter
      // Filter out EMS product from all products view
      filtered = products.filter(product => product.id !== "EMS");
    }
    
    setFilteredProducts(filtered);
  }, [filter, products, searchResults]);

  if (compact) {
    return (
      <div className="grid grid-cols-2 gap-2 mb-4">
        {filteredProducts.slice(0, 6).map((product) => (
          <Link href={`/Product/${product.id}`} key={product.id}> 
          <div key={product.id} className="flex flex-col items-start justify-between border border-gray-300 rounded-md p-2 product-grid-item group
          transition-all duration-200 hover:bg-primary hover:border-primary hover:text-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-16 object-contain"
            />
            <div className='flex items-end justify-between gap-1 w-full'>
              <h2 className="text-xs font-medium mt-1 w-2/3 truncate">{product.name}</h2>
              <div className='bg-white rounded-full px-1 py-1 border border-gray-300 group-hover:border-transparent'>
                <GoArrowUpRight className='text-xs text-primary' />
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 gap-y-4 md:gap-6 my-20">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col items-start justify-between border border-black rounded-[10px] p-4 product-grid-item group
          transition-all duration-200 hover:product-gradient hover:border-primary hover:shadow-[0px 0px 40px -16px #578EFFC7]
          hover:text-white"
          >
            <Link href={`/Product/${product.id}`} key={product.id} className='w-full'> 
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-28 md:h-48 object-contain"
            />
            <div className='flex items-end justify-between gap-1 w-full'>
              <h2 className="text-sm md:text-xl font-medium mt-2 md:w-11/12">{product.name}</h2>
              <div className='bg-white rounded-[40px] px-2 py-1 md:px-6 md:py-2 border border-black group-hover:border-transparent'>
                <GoArrowUpRight className='text-xs md:text-lg text-primary' />
              </div>
            </div>
            </Link>
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
