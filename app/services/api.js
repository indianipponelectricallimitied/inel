const API_BASE_URL = 'https://inelbackend-fccmbmfjbhewhbhh.centralindia-01.azurewebsites.net/api';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes 

const isClient = typeof window !== 'undefined';

class ApiService {
    static async getProducts() {
        if (isClient) {
            const cacheKey = 'products_cache';
            const cachedData = this.getFromCache(cacheKey);

            if (cachedData) {
                return cachedData;
            }
        }

        try {
            const response = await fetch(`${API_BASE_URL}/products`);
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            
            if (isClient) {
                this.setCache('products_cache', data.products);
            }
            return data.products;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    static async getProductById(id) {
        const products = await this.getProducts();
        return products.find(product => product.id === id);
    }

    static async getVehicleCategories() {
        const cacheKey = 'vehicle_categories_cache';
        const cachedData = this.getFromCache(cacheKey);

        if (cachedData) {
            return cachedData;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/vehicle-categories`);
            if (!response.ok) throw new Error('Failed to fetch vehicle categories');
            const data = await response.json();
            
            this.setCache(cacheKey, data.vehicleCategories);
            return data.vehicleCategories;
        } catch (error) {
            console.error('Error fetching vehicle categories:', error);
            throw error;
        }
    }

    static async getProductTypes() {
        const cacheKey = 'product_types_cache';
        const cachedData = this.getFromCache(cacheKey);

        if (cachedData) {
            return cachedData;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/product-types`);
            if (!response.ok) throw new Error('Failed to fetch product types');
            const data = await response.json();
            
            this.setCache(cacheKey, data.productTypes);
            return data.productTypes;
        } catch (error) {
            console.error('Error fetching product types:', error);
            throw error;
        }
    }

    static async getPolicies() {
        try {
            const response = await fetch(`${API_BASE_URL}/policies`);
            if (!response.ok) {
                throw new Error('Failed to fetch policies');
            }
            const data = await response.json();
            return data.policies;
        } catch (error) {
            console.error('Error fetching policies:', error);
            throw error;
        }
    }

    static getFromCache(key) {
        if (!isClient) return null;
        
        try {
            const cached = localStorage.getItem(key);
            if (!cached) return null;

            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp > CACHE_DURATION) {
                localStorage.removeItem(key);
                return null;
            }

            return data;
        } catch (error) {
            console.error('Error reading from cache:', error);
            return null;
        }
    }

    static setCache(key, data) {
        if (!isClient) return;
        
        try {
            const cacheData = {
                data,
                timestamp: Date.now()
            };
            localStorage.setItem(key, JSON.stringify(cacheData));
        } catch (error) {
            console.error('Error setting cache:', error);
        }
    }

    // Helper methods for filtering and searching
    static filterProductsByType(products, type) {
        return products.filter(product => product.type === type);
    }

    static filterProductsByVehicleCategory(products, category) {
        return products.filter(product => 
            product.vehicleCategories.includes(category)
        );
    }

    static searchProducts(products, searchTerm) {
        if (!searchTerm.trim()) return products;

        const calculateSimilarity = (str1, str2) => {
            const s1 = str1.toLowerCase();
            const s2 = str2.toLowerCase();
            
            if (s1.includes(s2) || s2.includes(s1)) return true;

            const searchWords = s1.split(' ');
            const targetWords = s2.split(' ');

            return searchWords.some(word => 
                word.length > 2 && 
                targetWords.some(targetWord => 
                    targetWord.includes(word) || word.includes(targetWord)
                )
            );
        };

        return products.filter(product => {
            // Ensure features and vehicleCategories are arrays before spreading
            const features = Array.isArray(product.features) ? product.features : [];
            const vehicleCategories = Array.isArray(product.vehicleCategories) ? product.vehicleCategories : [];
            
            const searchFields = [
                product.name,
                product.type,
                product.description,
                ...features,
                ...vehicleCategories
            ];

            return searchFields.some(field => 
                field && calculateSimilarity(searchTerm, field)
            );
        });
    }
}

export default ApiService; 