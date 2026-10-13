"use client"
import React, { useEffect, useState, useRef } from 'react';
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import Image from 'next/image';
import './StockDataCard.css';
import GlowingBox from '../../Ui/GlowingBox';
import useStockQuote from '../../../hooks/useStockQuote';
import { formatPrice, formatChange, formatPercent, formatQuoteTime, isPositive } from '../../../utils/stockFormat';

// Live NSE/BSE quote card used on the home page and investors section
export default function StockDataCard({ background }) {
  const [market, setMarket] = useState('NSE');
  const { quote, loading, error } = useStockQuote(market);
  const cardRef = useRef(null);

  // Track the cursor so the CSS glow follows it
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--xPos", `${event.clientX - rect.left}px`);
      card.style.setProperty("--yPos", `${event.clientY - rect.top}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const up = isPositive(quote?.change);

  return (
    <GlowingBox borderColor="#9EB2FF" className={`w-full h-full ${background} rounded-[20px] z-10 bg-gradient-to-br`}>
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
          {quote ? (
            <>
              <span className="text-4xl font-medium">{formatPrice(quote.price)} <span className='text-2xl'>INR</span></span>
              <span className={`flex items-center ${up ? 'text-green-500' : 'text-red-500'}`}>
                {formatChange(quote.change)} ({formatPercent(quote.changePercent)})
                {up ? (
                  <MdArrowUpward className="ml-1 text-green-500" />
                ) : (
                  <MdArrowDownward className="ml-1 text-red-500" />
                )}
              </span>
              <div className="text-[8px] text-gray-400">
                {formatQuoteTime(quote.lastUpdated)}
                {error && ' (delayed)'}
              </div>
            </>
          ) : (
            <>
              <span className="text-4xl font-medium">{loading ? 'Loading...' : '--'} <span className='text-2xl'>INR</span></span>
              <span className="flex items-center">{loading ? 'Loading...' : 'Price currently unavailable'}</span>
              <div className="text-[8px] text-gray-400">--</div>
            </>
          )}
        </div>
      </div>
    </GlowingBox>
  );
}
