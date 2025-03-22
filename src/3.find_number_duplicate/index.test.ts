import FindNumberDuplicate from './index';

describe('3. Find number duplicate', () => {
  const fnd = new FindNumberDuplicate();

  describe('Map', () => {
    test('  - should return 1, 3, 6 when input [1, 2, 3, 6, 3, 6, 1]', () => {
      const result = fnd.usingMap([1, 2, 3, 6, 3, 6, 1]);
      expect(result).toEqual([1, 3, 6]);
    });

    test('  - should return 3 when input [1, 2, 3, 4, 3]', () => {
      const result = fnd.usingMap([1, 2, 3, 4, 3]);
      expect(result).toEqual([3]);
    });
  });
});
