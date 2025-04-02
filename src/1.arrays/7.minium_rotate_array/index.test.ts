import MaxiumRotateArray from './index';

describe('7. Minium rotate array', () => {
  const poae = new MaxiumRotateArray();

  describe('a. Linear search', () => {
    test('  - should return 1 when input [5, 6, 1, 2, 3, 4]', () => {
      const result = poae.linearSearch([5, 6, 1, 2, 3, 4]);
      expect(result).toEqual(1);
    });

    test('  - should return 1 when input [3, 1, 2]', () => {
      const result = poae.linearSearch([3, 1, 2]);
      expect(result).toEqual(1);
    });
  });

  describe('a. Binnary search', () => {
    test('  - should return 1 when input [5, 6, 1, 2, 3, 4]', () => {
      const result = poae.binarySearch([5, 6, 1, 2, 3, 4]);
      expect(result).toEqual(1);
    });

    test('  - should return 1 when input [3, 1, 2]', () => {
      const result = poae.binarySearch([3, 1, 2]);
      expect(result).toEqual(1);
    });
  });
});
