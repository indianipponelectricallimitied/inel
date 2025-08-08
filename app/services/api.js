// const API_BASE_URL = 'https://inelbackend-fccmbmfjbhewhbhh.centralindia-01.azurewebsites.net/api';
const API_BASE_URL = 'https://inelbackend.vercel.app/api';
const CACHE_DURATION = 0; // 5 minutes 
// const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes 

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

    static async getInvestorData() {
        const cacheKey = 'investor_data_cache';
        const cachedData = this.getFromCache(cacheKey);

        if (cachedData) {
            return cachedData;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/investor`);
            if (!response.ok) throw new Error('Failed to fetch investor data');
            const data = await response.json();
            
            if (isClient) {
                this.setCache(cacheKey, data);
            }
            return data;
        } catch (error) {
            console.error('Error fetching investor data:', error);
            throw error;
        }
    }

    static async getPosts() {
        const cacheKey = 'posts_cache';
        const cachedData = this.getFromCache(cacheKey);

        if (cachedData) {
            return cachedData;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/posts`);
            if (!response.ok) throw new Error(`Failed to fetch posts: ${response.status}`);
            
            const data = await response.json();
            
            // Process the response based on data structure
            let posts = [];
            if (Array.isArray(data)) {
                posts = data;
            } else if (data && typeof data === 'object') {
                // If the API returns an object with results array (common pattern)
                if (Array.isArray(data.results)) {
                    posts = data.results;
                } else {
                    // If data is a single object, wrap it in an array
                    posts = [data];
                }
            }
            
            if (isClient) {
                this.setCache(cacheKey, posts);
            }
            
            return posts;
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }

    static async getPostBySlug(slug) {
        try {
            // First try to get from all posts (for faster response if already cached)
            const allPosts = await this.getPosts();
            const foundPost = allPosts.find(post => post.slug === slug);
            if (foundPost) return foundPost;
            
            // If not found, make a direct API call
            const response = await fetch(`${API_BASE_URL}/posts?slug=${encodeURIComponent(slug)}`);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch post: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Handle different API response formats
            if (Array.isArray(data) && data.length > 0) {
                return data[0];
            } else if (data && typeof data === 'object') {
                if (Array.isArray(data.results) && data.results.length > 0) {
                    // Filter for exact match if API returned paginated results
                    const exactMatch = data.results.find(post => post.slug === slug);
                    if (exactMatch) return exactMatch;
                    return data.results[0];
                } else if (data.slug === slug || data.id === slug) {
                    // If API returned a single post object
                    return data;
                }
            }
            
            // If no post found with the provided slug, try fetching by ID
            const idResponse = await fetch(`${API_BASE_URL}/posts/${slug}`);
            if (!idResponse.ok) {
                throw new Error('Post not found');
            }
            
            return await idResponse.json();
        } catch (error) {
            console.error(`Error fetching post with slug ${slug}:`, error);
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
        return products.filter(product => {
            // Handle both old 'type' field and new 'types' array field
            if (product.types && Array.isArray(product.types)) {
                // New backend: check if any of the product's types match
                return product.types.some(productType => productType === type);
            } else if (product.type) {
                // Old backend: direct type comparison
                return product.type === type;
            }
            return false;
        });
    }

    static filterProductsByVehicleCategory(products, category) {
        return products.filter(product => {
            // Handle both old array format and new object format
            if (Array.isArray(product.vehicleCategories)) {
                // Old format: array of category names
                return product.vehicleCategories.includes(category);
            } else if (product.vehicleCategories && typeof product.vehicleCategories === 'object') {
                // New format: object with category names as keys
                return Object.keys(product.vehicleCategories).includes(category);
            }
            return false;
        });
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
            
            // Handle both old array format and new object format for vehicleCategories
            let vehicleCategories = [];
            if (Array.isArray(product.vehicleCategories)) {
                // Old format: array of category names
                vehicleCategories = product.vehicleCategories;
            } else if (product.vehicleCategories && typeof product.vehicleCategories === 'object') {
                // New format: object with category names as keys
                vehicleCategories = Object.keys(product.vehicleCategories);
            }
            
            // Handle both old 'type' field and new 'types' array field
            const productTypes = [];
            if (product.types && Array.isArray(product.types)) {
                // New backend: add all types from the array
                productTypes.push(...product.types);
            } else if (product.type) {
                // Old backend: add single type
                productTypes.push(product.type);
            }
            
            const searchFields = [
                product.name,
                product.description,
                ...features,
                ...vehicleCategories,
                ...productTypes
            ];

            return searchFields.some(field => 
                field && calculateSimilarity(searchTerm, field)
            );
        });
    }
}

export default ApiService; 