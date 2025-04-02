import PairWithTheGivenSum from './index';

describe('1. Pair with the given sum', () => {
  const pgs = new PairWithTheGivenSum();

  describe('a. Nested loop', () => {
    test('  - should return true when input [1, 2, 3, 4, 5], 8', () => {
      const result = pgs.nestedLoopSum([1, 2, 3, 4, 5], 8);
      // asserts that the result is equal to true
      expect(result).toBe(true);
    });

    test('  - should return false when input [1, -2, 1, 0, 5], 0', () => {
      const result = pgs.nestedLoopSum([1, -2, 1, 0, 5], 0);
      // asserts that the result is equal to true
      expect(result).toBe(false);
    });
  });

  describe('b. Sorting and binnary search', () => {
    test('  - should return true when input [1, 2, 3, 4, 5], 8', () => {
      const result = pgs.sortingBinarySearchSum([1, 2, 3, 4, 5], 8);
      // asserts that the result is equal to true
      expect(result).toBe(true);
    });

    test('  - should return false when input [1, -2, 1, 0, 5], 0', () => {
      const result = pgs.sortingBinarySearchSum([1, -2, 1, 0, 5], 0);
      // asserts that the result is equal to true
      expect(result).toBe(false);
    });
  });

  describe('c. Hash set', () => {
    test('  - should return true when input [1, 2, 3, 4, 5], 8', () => {
      const result = pgs.hashSetSum([1, 2, 3, 4, 5], 8);
      // asserts that the result is equal to true
      expect(result).toBe(true);
    });

    test('  - should return false when input [1, -2, 1, 0, 5], 0', () => {
      const result = pgs.hashSetSum([1, -2, 1, 0, 5], 0);
      // asserts that the result is equal to true
      expect(result).toBe(false);
    });
  });
});
