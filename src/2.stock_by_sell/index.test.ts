import StockBuySell from './index';

describe('2. Stock buy sell', () => {
  const sbs = new StockBuySell();

  describe('a. Nested loop', () => {
    test('  - should return 8 when input [7, 10, 1, 3, 6, 9, 2]', () => {
      const result = sbs.nestedLoop([7, 10, 1, 3, 6, 9, 2]);
      expect(result).toBe(8);
    });

    test('  - should return 0 when input [7, 6, 4, 3, 1]', () => {
      const result = sbs.nestedLoop([7, 6, 4, 3, 1]);
      expect(result).toBe(0);
    });

    test('  - should return 10 when input [1, 3, 6, 9, 11]', () => {
      const result = sbs.nestedLoop([1, 3, 6, 9, 11]);
      expect(result).toBe(10);
    });
  });

  describe('b. Traversal', () => {
    test('  - should return 8 when input [7, 10, 1, 3, 6, 9, 2]', () => {
      const result = sbs.traversal([7, 10, 1, 3, 6, 9, 2]);
      expect(result).toBe(8);
    });

    test('  - should return 0 when input [7, 6, 4, 3, 1]', () => {
      const result = sbs.traversal([7, 6, 4, 3, 1]);
      expect(result).toBe(0);
    });

    test('  - should return 10 when input [1, 3, 6, 9, 11]', () => {
      const result = sbs.traversal([1, 3, 6, 9, 11]);
      expect(result).toBe(10);
    });
  });
});
