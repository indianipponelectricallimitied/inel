
import React, { useEffect, useState } from 'react';
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

export default function StockTicker() {
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY || 'IG1G4QKESM03SXS1';
        const response = await fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=INDNIPPON.BSE&apikey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch stock data');
        }

        const data = await response.json();
        setStockData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStockData();
    
    // Fetch every 5 minutes
    const interval = setInterval(fetchStockData, 300000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className='text-white'>Loading...</div>;
  if (error) return <div className='text-white'>Error: {error}</div>;

  const quote = stockData?.['Global Quote'];

  return (
    <div className="flex items-center gap-2 text-sm text-white">
      <span className="font-medium">INDNIPPON</span>
      {quote && (
        <>
          <span>₹{parseFloat(quote['05. price']).toFixed(2)}</span>
          <span className={`flex items-center ${parseFloat(quote['09. change']) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {parseFloat(quote['10. change percent']).toFixed(2)}%
            {parseFloat(quote['09. change']) >= 0 ? (
              <MdArrowUpward />
            ) : (
              <MdArrowDownward />
            )}
          </span>
        </>
      )}
    </div>
  );
}
