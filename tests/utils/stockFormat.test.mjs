import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatPrice, formatChange, formatPercent, isPositive } from '../../app/utils/stockFormat.js';

test('formats numbers to two decimals with sign', () => {
  assert.equal(formatPrice(1188.6), '1188.60');
  assert.equal(formatChange(-14.4), '-14.40');
  assert.equal(formatChange(3), '+3.00');
  assert.equal(formatPercent(-1.1970), '-1.20%');
});

test('handles missing values', () => {
  assert.equal(formatPrice(null), '--');
  assert.equal(formatPercent(undefined), '--%');
  assert.equal(isPositive(null), false);
});
