import SearchSortedRotatedArray from './index';

describe('8. Search sorted rotated array', () => {
  const s = new SearchSortedRotatedArray();

  describe('a. Linear search', () => {
    test('  - should return 8 when input [5, 6, 7, 8, 9, 10, 1, 2, 3]', () => {
      const result = s.linearSearch([5, 6, 7, 8, 9, 10, 1, 2, 3], 3);
      expect(result).toEqual(8);
    });

    test('  - should return -1 when input [3, 5, 1, 2]', () => {
      const result = s.linearSearch([3, 5, 1, 2], 6);
      expect(result).toEqual(-1);
    });

    test('  - should return 1 when input [3, 5, 1, 2]', () => {
      const result = s.linearSearch([33, 42, 72, 99], 42);
      expect(result).toEqual(1);
    });

    describe('b. Binary search', () => {
      test('  - should return 8 when input [5, 6, 7, 8, 9, 10, 1, 2, 3]', () => {
        const result = s.binarySearch([5, 6, 7, 8, 9, 10, 1, 2, 3], 3);
        expect(result).toEqual(8);
      });

      test('  - should return -1 when input [3, 5, 1, 2]', () => {
        const result = s.binarySearch([3, 5, 1, 2], 6);
        expect(result).toEqual(-1);
      });

      test('  - should return 1 when input [3, 5, 1, 2]', () => {
        const result = s.binarySearch([33, 42, 72, 99], 42);
        expect(result).toEqual(1);
      });
    });
  });
});
