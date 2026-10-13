// Display helpers shared by the stock ticker and stock card.

export function formatPrice(value) {
  return typeof value === 'number' ? value.toFixed(2) : '--';
}

export function formatChange(value) {
  if (typeof value !== 'number') return '--';
  return `${value > 0 ? '+' : ''}${value.toFixed(2)}`;
}

export function formatPercent(value) {
  if (typeof value !== 'number') return '--%';
  return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
}

export function isPositive(change) {
  return typeof change === 'number' && change >= 0;
}

/** Format an ISO timestamp in IST, e.g. "13 Oct 2026, 03:29 pm". */
export function formatQuoteTime(iso, { withYear = true } = {}) {
  if (!iso) return '--';
  return new Date(iso).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: 'numeric',
    month: 'short',
    ...(withYear && { year: 'numeric' }),
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}
