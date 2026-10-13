// Client-side access to live stock quotes. Data comes from our own
// /api/stock route, which proxies Yahoo Finance (see services/yahooFinance.js).

class StockDataService {
  /**
   * Fetch the latest INDNIPPON quote for a market ('NSE' | 'BSE').
   * Resolves to { symbol, market, currency, price, previousClose, change,
   * changePercent, dayHigh, dayLow, lastUpdated }.
   */
  static async getStockData(market = 'NSE') {
    const response = await fetch(`/api/stock?market=${encodeURIComponent(market)}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch stock data (${response.status})`);
    }

    return response.json();
  }
}

export default StockDataService;
