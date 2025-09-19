"use client"

import React, { useEffect, useState } from 'react';
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import StockDataService from '../../../services/stockDataService';

export default function StockTicker({className = ''}) {
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Manual NSE data for navbar ticker - matches StockDataCard
  // TODO: Remove manual data and restore API calls when requested
  const manualNSEData = {
    'Global Quote': {
      '01. symbol': 'INDNIPPON.NSE',
      '05. price': '982.05', // 18 Sep close
      '09. change': '-20.95', // vs 17 Sep close (1003.00)
      '10. change percent': '-2.0887%',
      '07. latest trading day': '2025-09-18T15:30:00'
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const loadStockData = () => {
      // Using manual NSE data instead of API calls
      setStockData(manualNSEData);
      setLoading(false);
    };

    loadStockData();
    
    /* 
    // PRESERVED API CODE - Uncomment when manual data is no longer needed:
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
    */
  }, [mounted]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="flex items-center gap-2 text-sm">
      <span>INDNIPPON (NSE)</span>
      <span>--</span>
    </div>;
  }

  if (loading) return <div className="flex items-center gap-2 text-sm">
    <span>INDNIPPON (NSE)</span>
    <span>Loading...</span>
  </div>;
  
  const quote = stockData?.['Global Quote'];

  return (
      <div className={`flex items-center gap-2 text-sm ${className}`}>
      <span>INDNIPPON (NSE)</span>
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
          <span className="text-[8px] text-gray-400">
            {new Date(quote['07. latest trading day']).toLocaleString('en-IN', {
              day: 'numeric',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            })}
          </span>
          {error && <span className="text-xs text-gray-400">(est.)</span>}
        </>
      )}
    </div>
  );
}
