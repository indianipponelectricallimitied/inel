"use client"
import React, { useEffect, useState, useRef } from 'react';
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import Image from 'next/image';
import './StockDataCard.css'; // Create this CSS file

export default function StockDataCard() {
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [market, setMarket] = useState('NSE'); // Use NSE by default
  const cardRef = useRef(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`
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

  useEffect(() => {
    const card = cardRef.current;
    
    // Only add event listener if card exists
    if (card) {
      const handleMouseMove = (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--xPos", `${x}px`);
        card.style.setProperty("--yPos", `${y}px`);
      };

      card.addEventListener("mousemove", handleMouseMove);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [cardRef.current]); // Add cardRef.current as dependency

  if (loading) return <div className='text-white'>Loading...</div>;
  if (error) return <div className='text-white'>Error: {error}</div>;

  const quote = stockData?.['Global Quote'];

  return (
    <div className="card-wrapper" ref={cardRef}>
      
        <div className="tabs z-[3]">
          <input 
            type="radio" 
            id="radio-1" 
            name="tabs" 
            checked={market === "NSE"} 
            onChange={() => setMarket("NSE")}
          />
          <label className="tab" htmlFor="radio-1">NSE</label>

          <input 
            type="radio" 
            id="radio-2" 
            name="tabs" 
            checked={market === "BSE"} 
            onChange={() => setMarket("BSE")}
          />
          <label className="tab" htmlFor="radio-2">BSE</label>

          <div className="glider"></div>
        </div>

        <Image src="/graph.png" alt="logo" width={250} height={250} className='w-full h-full absolute top-4 right-0 object-contain z-[2]' />
        
        
        <div className="card-content flex flex-col space-y-2">
            <span className="font-medium text-xl mt-20">IBM ({market})</span>
            {quote && (
            <>
                <span className="text-4xl font-medium">{parseFloat(quote['05. price']).toFixed(2)} <span className='text-2xl'>INR</span></span>
                <span className="flex items-center">
                {parseFloat(quote['10. change percent']).toFixed(2)}%
                {parseFloat(quote['09. change']) >= 0 ? (
                    <MdArrowUpward className="ml-1 text-green-500" />
                ) : (
                    <MdArrowDownward className="ml-1 text-red-500" />
                )}
                </span>
                <div className="text-xs text-gray-400">
                {new Date(quote['07. latest trading day']).toLocaleString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                })}
                </div>
            </>
            )}
      </div>
    </div>
  );
}
