# Live Stock Data

The navbar ticker (`StockTicker`) and the investor "Stock Information" card (`StockDataCard`)
show the live INDNIPPON share price. Nothing is entered by hand.

## Source

[Yahoo Finance](https://finance.yahoo.com/) public chart endpoint — free, no API key.

| Market | Yahoo symbol   |
|--------|----------------|
| NSE    | `INDNIPPON.NS` |
| BSE    | `INDNIPPON.BO` |

Quotes are delayed by up to ~15 minutes, as with most free sources. Change and change %
are computed against the previous day's close.

## Data flow

```
StockTicker / StockDataCard
  -> hooks/useStockQuote.js        (polls every 60s, keeps last good quote on failure)
  -> services/stockDataService.js  (GET /api/stock?market=NSE|BSE)
  -> api/stock/route.js            (server route, cached 60s)
  -> services/yahooFinance.js      (calls Yahoo, normalises the response)
```

Yahoo blocks direct browser requests (CORS), so it is only called from the server route.
The 60-second server cache means all visitors share one upstream request per market per minute.

## API

`GET /api/stock?market=NSE` (or `BSE`) returns:

```json
{
  "symbol": "INDNIPPON.NS",
  "market": "NSE",
  "currency": "INR",
  "price": 1188.6,
  "previousClose": 1203,
  "change": -14.4,
  "changePercent": -1.197,
  "dayHigh": 1211.1,
  "dayLow": 1170,
  "lastUpdated": "2026-10-13T09:59:49.000Z"
}
```

Errors: `400` for an unknown market, `502` if Yahoo can't be reached.

## Failure behaviour

- If a refresh fails after a successful load, the last price stays on screen marked "(delayed)".
- If no price could be loaded at all, the card shows "Price currently unavailable" — no
  made-up figures are ever displayed.

## Changing behaviour

- Refresh interval: `DEFAULT_REFRESH_MS` in `app/hooks/useStockQuote.js`
- Server cache time: `REVALIDATE_SECONDS` in `app/api/stock/route.js`
- Switching provider: replace `fetchQuote` in `app/services/yahooFinance.js`; keep the returned shape.

## Tests

`npm test` runs `tests/services/yahooFinance.test.mjs` and `tests/utils/stockFormat.test.mjs`.
