import React, { useEffect, useState } from 'react';
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import StockDataService from '../../../services/stockDataService';

export default function StockTicker() {
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const data = await StockDataService.getStockData('INDNIPPON.BSE', 'BSE');
        setStockData(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching stock data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStockData();
    
    // Setup the auto-refresh service
    StockDataService.setupAutoRefresh();
    
    // Refresh component every 5 minutes to show updated data if available
    const interval = setInterval(fetchStockData, 300000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;
  
  const quote = stockData?.['Global Quote'];

  return (
    <div className="flex items-center gap-2 text-sm">
      <span>INDNIPPON</span>
      {quote && (
        <>
          <span>₹{parseFloat(quote['05. price']).toFixed(2)}</span>
          <span className={`flex items-center ${parseFloat(quote['09. change']) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {quote['10. change percent'].replace('%', '')}%
            {parseFloat(quote['09. change']) >= 0 ? (
              <MdArrowUpward />
            ) : (
              <MdArrowDownward />
            )}
          </span>
          {error && <span className="text-xs text-gray-400">(est.)</span>}
        </>
      )}
    </div>
  );
}
