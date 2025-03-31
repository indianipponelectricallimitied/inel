'use client';
import { useState, useEffect } from 'react';

const ProductGrid = ({ filter, searchResults }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products when component mounts
    fetch('/data.json')
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
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.type}</p>
            <p className="text-sm mt-2">{product.description}</p>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-8 text-gray-500">
          No products found
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
