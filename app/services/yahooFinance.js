// Server-side helper for fetching live INDNIPPON quotes from Yahoo Finance's
// public chart endpoint (free, no API key). Only call this from server code
// (e.g. app/api/stock/route.js) — Yahoo blocks browser requests via CORS.

const YAHOO_CHART_URL = 'https://query1.finance.yahoo.com/v8/finance/chart';

// Market code shown in the UI -> Yahoo ticker symbol
export const MARKET_SYMBOLS = {
  NSE: 'INDNIPPON.NS',
  BSE: 'INDNIPPON.BO',
};

/**
 * Turn a raw Yahoo chart response into the quote shape the UI uses.
 * Change is computed against the previous close so it matches what
 * NSE/BSE display.
 */
export function parseYahooChart(json, market) {
  const meta = json?.chart?.result?.[0]?.meta;
  if (!meta || typeof meta.regularMarketPrice !== 'number') {
    const reason = json?.chart?.error?.description || 'No quote data in response';
    throw new Error(`Yahoo Finance: ${reason}`);
  }

  const price = meta.regularMarketPrice;
  const previousClose = meta.chartPreviousClose ?? meta.previousClose ?? null;
  const change = previousClose != null ? price - previousClose : null;
  const changePercent = previousClose ? (change / previousClose) * 100 : null;

  return {
    symbol: meta.symbol,
    market,
    currency: meta.currency || 'INR',
    price,
    previousClose,
    change,
    changePercent,
    dayHigh: meta.regularMarketDayHigh ?? null,
    dayLow: meta.regularMarketDayLow ?? null,
    // regularMarketTime is in seconds since epoch
    lastUpdated: meta.regularMarketTime
      ? new Date(meta.regularMarketTime * 1000).toISOString()
      : null,
  };
}

/**
 * Fetch the latest quote for a market ('NSE' | 'BSE').
 * `revalidateSeconds` lets Next.js cache the upstream call so many visitors
 * share a single Yahoo request.
 */
export async function fetchQuote(market, { revalidateSeconds = 60 } = {}) {
  const symbol = MARKET_SYMBOLS[market];
  if (!symbol) {
    throw new Error(`Unsupported market: ${market}`);
  }

  const url = `${YAHOO_CHART_URL}/${encodeURIComponent(symbol)}?interval=1d&range=1d`;
  const response = await fetch(url, {
    // Yahoo rejects requests without a browser-like user agent
    headers: { 'User-Agent': 'Mozilla/5.0' },
    next: { revalidate: revalidateSeconds },
  });

  if (!response.ok) {
    throw new Error(`Yahoo Finance responded with ${response.status} for ${symbol}`);
  }

  return parseYahooChart(await response.json(), market);
}
