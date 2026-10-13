"use client"

import { useEffect, useState } from 'react';
import StockDataService from '../services/stockDataService';

// Default auto-refresh interval: 1 minute
const DEFAULT_REFRESH_MS = 60 * 1000;

/**
 * Live stock quote for a market, refreshed on an interval.
 * Returns { quote, loading, error }. On a failed refresh the last good quote
 * is kept so the UI doesn't flicker to an error state.
 */
export default function useStockQuote(market = 'NSE', refreshMs = DEFAULT_REFRESH_MS) {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setQuote(null);

    const load = async () => {
      try {
        const data = await StockDataService.getStockData(market);
        if (cancelled) return;
        setQuote(data);
        setError(null);
      } catch (err) {
        console.error(`Error fetching ${market} stock data:`, err);
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    const interval = setInterval(load, refreshMs);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [market, refreshMs]);

  return { quote, loading, error };
}
