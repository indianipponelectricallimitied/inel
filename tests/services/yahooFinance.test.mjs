import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseYahooChart, MARKET_SYMBOLS } from '../../app/services/yahooFinance.js';

const sample = {
  chart: {
    result: [{
      meta: {
        symbol: 'INDNIPPON.NS',
        currency: 'INR',
        regularMarketPrice: 1188.6,
        chartPreviousClose: 1203.0,
        regularMarketDayHigh: 1211.1,
        regularMarketDayLow: 1170.0,
        regularMarketTime: 1791885589,
      },
    }],
    error: null,
  },
};

test('maps NSE/BSE to Yahoo symbols', () => {
  assert.equal(MARKET_SYMBOLS.NSE, 'INDNIPPON.NS');
  assert.equal(MARKET_SYMBOLS.BSE, 'INDNIPPON.BO');
});

test('parses price and computes change vs previous close', () => {
  const q = parseYahooChart(sample, 'NSE');
  assert.equal(q.symbol, 'INDNIPPON.NS');
  assert.equal(q.market, 'NSE');
  assert.equal(q.price, 1188.6);
  assert.equal(q.previousClose, 1203.0);
  assert.ok(Math.abs(q.change - -14.4) < 1e-9);
  assert.ok(Math.abs(q.changePercent - -1.197) < 0.001);
  assert.equal(q.lastUpdated, new Date(1791885589 * 1000).toISOString());
});

test('throws on an error response instead of returning fake data', () => {
  const bad = { chart: { result: null, error: { description: 'No data found' } } };
  assert.throws(() => parseYahooChart(bad, 'NSE'), /No data found/);
});
