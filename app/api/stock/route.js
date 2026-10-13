import { NextResponse } from 'next/server';
import { fetchQuote, MARKET_SYMBOLS } from '../../services/yahooFinance';

// How long (seconds) a fetched quote is reused before hitting Yahoo again
const REVALIDATE_SECONDS = 60;

// GET /api/stock?market=NSE|BSE -> live INDNIPPON quote
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const market = (searchParams.get('market') || 'NSE').toUpperCase();

  if (!MARKET_SYMBOLS[market]) {
    return NextResponse.json(
      { error: `market must be one of: ${Object.keys(MARKET_SYMBOLS).join(', ')}` },
      { status: 400 }
    );
  }

  try {
    const quote = await fetchQuote(market, { revalidateSeconds: REVALIDATE_SECONDS });
    return NextResponse.json(quote, {
      headers: {
        'Cache-Control': `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=${REVALIDATE_SECONDS * 5}`,
      },
    });
  } catch (error) {
    console.error('Stock API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch stock data' }, { status: 502 });
  }
}
