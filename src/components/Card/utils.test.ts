import { formatPrice } from './utils';

describe('formatPrice', () => {
  it('should render the price correctly', () => {
    const priceInCents = 100000;
    expect(formatPrice(priceInCents)).toBe(1000);
  });
});
