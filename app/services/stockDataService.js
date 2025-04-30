const CACHE_KEY = 'stock_data_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const FETCH_INTERVAL = 60 * 60 * 1000; // 1 hour in milliseconds (24 calls per day)
const isClient = typeof window !== 'undefined';

// Dummy data in the correct format to use when API limit is reached
const DEFAULT_DUMMY_DATA = {
  "Global Quote": {
    "01. symbol": "INDNIPPON.BSE",
    "02. open": "600.0000",
    "03. high": "601.7",
    "04. low": "598.5",
    "05. price": "600.5",
    "06. volume": "12450",
    "07. latest trading day": new Date().toISOString().split('T')[0],
    "08. previous close": "599.5",
    "09. change": "1.0000",
    "10. change percent": "1.16%"
  }
};

class StockDataService {
  static async getStockData(symbol = 'INDNIPPON.BSE', market = 'BSE') {
    // Try to get from cache first
    const cachedData = this.getFromCache();
    
    // If we have valid cached data, return it
    if (cachedData) {
      return this.formatStockData(cachedData, market);
    }
    
    // If no cached data or it's expired, fetch from API
    return this.fetchAndCacheStockData(symbol);
  }
  
  static async fetchAndCacheStockData(symbol) {
    try {
      const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY || 'IG1G4QKESM03SXS1';
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch stock data');
      }
      
      const data = await response.json();
      
      // Check if we received a rate limit message or no Global Quote data
      if (data.Information || !data['Global Quote'] || Object.keys(data['Global Quote']).length === 0) {
        console.warn('API rate limit reached or invalid data received, using dummy data');
        
        // Create a custom dummy data with the requested symbol
        const dummyData = JSON.parse(JSON.stringify(DEFAULT_DUMMY_DATA));
        dummyData["Global Quote"]["01. symbol"] = symbol;
        
        // Cache the dummy data to avoid frequent API calls when rate limited
        if (isClient) {
          this.setCache(dummyData);
        }
        
        return dummyData;
      }
      
      // Only cache if we're in the client and we got valid data
      if (isClient && data['Global Quote']) {
        this.setCache(data);
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching stock data:', error);
      
      // Return dummy data in case of any error
      const dummyData = JSON.parse(JSON.stringify(DEFAULT_DUMMY_DATA));
      dummyData["Global Quote"]["01. symbol"] = symbol;
      
      return dummyData;
    }
  }
  
  static getFromCache() {
    if (!isClient) return null;
    
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;
      
      const { data, timestamp } = JSON.parse(cached);
      
      // Check if data is expired
      if (Date.now() - timestamp > CACHE_DURATION) {
        localStorage.removeItem(CACHE_KEY);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('Error reading from cache:', error);
      return null;
    }
  }
  
  static setCache(data) {
    if (!isClient) return;
    
    try {
      const cacheData = {
        data,
        timestamp: Date.now()
      };
      
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.error('Error writing to cache:', error);
    }
  }
  
  static formatStockData(data, market) {
    // If market is provided but doesn't match the symbol, we'll need to adjust
    // This would be used when we have BSE data but need to display NSE format, or vice versa
    // For now, we're just returning the data as is, but you could add market-specific formatting here
    
    return data;
  }
  
  // Setup a timer to refresh the cache periodically if needed
  static setupAutoRefresh() {
    if (!isClient) return;
    
    // Check if we already have a refresh interval running
    if (this.refreshInterval) return;
    
    this.refreshInterval = setInterval(() => {
      // Refresh cache if it's more than an hour old
      const cachedData = this.getFromCache();
      if (!cachedData) {
        this.fetchAndCacheStockData('INDNIPPON.BSE');
      }
    }, FETCH_INTERVAL);
    
    // Clean up on window unload
    window.addEventListener('beforeunload', () => {
      if (this.refreshInterval) {
        clearInterval(this.refreshInterval);
      }
    });
  }
}

export default StockDataService; 