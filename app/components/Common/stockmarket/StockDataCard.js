"use client"
import React, { useEffect, useState, useRef } from 'react';
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import Image from 'next/image';
import './StockDataCard.css'; // Create this CSS file
import StockDataService from '../../../services/stockDataService';
import GlowingBox from '../../Ui/GlowingBox';


export default function StockDataCard({background}) {
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [market, setMarket] = useState('NSE'); // Use NSE by default
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef(null);

  // Manual stock data - will be used instead of API calls
  // TODO: Remove manual data and restore API calls when requested
  const manualNSEData = {
    'Global Quote': {
      '01. symbol': 'INDNIPPON.NSE',
      '05. price': '994.00', // 19 Sep close
      '09. change': '11.95', // vs 18 Sep close (982.05)
      '10. change percent': '1.2167%',
      '07. latest trading day': '2025-09-19T15:30:00'
    }
  };

  const manualBSEData = {
    'Global Quote': {
      '01. symbol': 'INDNIPPON.BSE',
      '05. price': '986.60', // 19 Sep close
      '09. change': '9.60', // vs 18 Sep close (977.00)
      '10. change percent': '0.9826%',
      '07. latest trading day': '2025-09-19T15:30:00'
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchStockData = async () => {
      try {
        // Using manual data for both NSE and BSE
        // TODO: Restore API calls when manual updates are no longer needed
        if (market === 'NSE') {
          setStockData(manualNSEData);
          setLoading(false);
        } else {
          setStockData(manualBSEData);
          setLoading(false);
        }
        
        /* 
        // PRESERVED API CODE - Uncomment when manual data is no longer needed:
        // Use manual data for NSE, fetch live data for BSE
        if (market === 'NSE') {
          setStockData(manualNSEData);
          setLoading(false);
        } else {
          const symbol = 'INDNIPPON.BSE';
          const data = await StockDataService.getStockData(symbol, market);
          setStockData(data);
          setLoading(false);
        }
        */
      } catch (err) {
        console.error('Error fetching stock data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStockData();
    
    // Auto-refresh disabled while using manual data
    // TODO: Restore auto-refresh when API calls are restored
    /*
    // Setup auto-refresh service only for BSE
    if (market === 'BSE') {
      StockDataService.setupAutoRefresh();
      
      // Refresh the UI every 5 minutes to show updated data if available
      const interval = setInterval(fetchStockData, 300000);
      return () => clearInterval(interval);
    }
    */
  }, [market, mounted]); // Re-fetch when market changes

  useEffect(() => {
    if (!mounted) return;

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
  }, [cardRef.current, mounted]); // Add cardRef.current as dependency

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <GlowingBox borderColor="#9EB2FF" className={`w-full h-full ${background} rounded-[20px] z-10 bg-gradient-to-br`}>
        <div className="card-wrapper" ref={cardRef}>
          <h2 className='text-2xl pb-4'>Stock Information</h2>
          <div className="tabs z-[3]">
            <input type="radio" id="radio-1" name="tabs" defaultChecked />
            <label className="tab" htmlFor="radio-1">NSE</label>
            <input type="radio" id="radio-2" name="tabs" />
            <label className="tab" htmlFor="radio-2">BSE</label>
            <div className="glider"></div>
          </div>
          <Image src="/graph.png" alt="logo" width={250} height={250} className='w-full h-full absolute top-4 right-0 object-contain z-[2]' />
          <div className="card-content flex flex-col space-y-2">
            <span className="font-medium text-xl mt-20">INDNIPPON (NSE)</span>
            <span className="text-4xl font-medium">-- <span className='text-2xl'>INR</span></span>
            <span className="flex items-center">-- (--%)</span>
            <div className="text-[8px] text-gray-400">--</div>
          </div>
        </div>
      </GlowingBox>
    );
  }

  if (loading) return (
    <GlowingBox borderColor="#9EB2FF" className={`w-full h-full ${background} rounded-[20px] z-10 bg-gradient-to-br`}>
      <div className="card-wrapper" ref={cardRef}>
        <h2 className='text-2xl pb-4'>Stock Information</h2>
        <div className="tabs z-[3]">
          <input type="radio" id="radio-1" name="tabs" defaultChecked />
          <label className="tab" htmlFor="radio-1">NSE</label>
          <input type="radio" id="radio-2" name="tabs" />
          <label className="tab" htmlFor="radio-2">BSE</label>
          <div className="glider"></div>
        </div>
        <Image src="/graph.png" alt="logo" width={250} height={250} className='w-full h-full absolute top-4 right-0 object-contain z-[2]' />
        <div className="card-content flex flex-col space-y-2">
          <span className="font-medium text-xl mt-20">INDNIPPON (NSE)</span>
          <span className="text-4xl font-medium">Loading... <span className='text-2xl'>INR</span></span>
          <span className="flex items-center">Loading... (Loading...%)</span>
                      <div className="text-[8px] text-gray-400">Loading...</div>
        </div>
      </div>
    </GlowingBox>
  );
  
  const quote = stockData?.['Global Quote'];
  const isUsingDummyData = stockData && stockData['Global Quote'] && !quote['01. symbol'].includes(market);

  return (
    <GlowingBox borderColor="#9EB2FF" className={`w-full h-full ${background} rounded-[20px] z-10 bg-gradient-to-br  `} >

    
    <div className="card-wrapper" ref={cardRef}>
        <h2 className='text-2xl pb-4'>Stock Information</h2>
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
            <span className="font-medium text-xl mt-20">INDNIPPON ({market})</span>
            {quote && (
            <>
                <span className="text-4xl font-medium">{parseFloat(quote['05. price']).toFixed(2)} <span className='text-2xl'>INR</span></span>
                <span className={`flex items-center ${parseFloat(quote['09. change']) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {parseFloat(quote['09. change']).toFixed(2)} ({quote['10. change percent'].replace('%', '')}%)
                {parseFloat(quote['09. change']) >= 0 ? (
                    <MdArrowUpward className="ml-1 text-green-500" />
                ) : (
                    <MdArrowDownward className="ml-1 text-red-500" />
                )}
                </span>
                <div className="text-[8px] text-gray-400">
                {new Date(quote['07. latest trading day']).toLocaleString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                })}
                </div>
                {/* {(error || isUsingDummyData) && <div className="text-xs text-gray-400">(Showing estimated values)</div>} */}
            </>
            )}
      </div>
    </div>
    </GlowingBox>
  );
}
