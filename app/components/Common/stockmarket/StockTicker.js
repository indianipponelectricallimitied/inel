"use client"

import React from 'react';
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import useStockQuote from '../../../hooks/useStockQuote';
import { formatPrice, formatPercent, formatQuoteTime, isPositive } from '../../../utils/stockFormat';

// Compact live NSE quote shown in the navbar
export default function StockTicker({ className = '' }) {
  const { quote, loading, error } = useStockQuote('NSE');

  if (!quote) {
    return (
      <div className={`flex items-center gap-2 text-sm ${className}`}>
        <span>INDNIPPON (NSE)</span>
        <span>{loading ? 'Loading...' : '--'}</span>
      </div>
    );
  }

  const up = isPositive(quote.change);

  return (
    <div className={`flex items-center gap-2 text-sm ${className}`}>
      <span>INDNIPPON (NSE)</span>
      <span>₹{formatPrice(quote.price)}</span>
      <span className={`flex items-center ${up ? 'text-green-500' : 'text-red-500'}`}>
        {formatPercent(quote.changePercent)}
        {up ? <MdArrowUpward /> : <MdArrowDownward />}
      </span>
      <span className="text-[8px] text-gray-400">
        {formatQuoteTime(quote.lastUpdated, { withYear: false })}
      </span>
      {error && <span className="text-xs text-gray-400" title={error}>(delayed)</span>}
    </div>
  );
}
