import MaxiumSubArray from './index';

describe('6. Maximum Product Subarray', () => {
  const poae = new MaxiumSubArray();

  describe('a. Nested loop', () => {
    test('  - should return 180 when input [-2, 6, -3, -10, 0, 2]', () => {
      const result = poae.nestedLoops([-2, 6, -3, -10, 0, 2]);
      expect(result).toEqual(180);
    });

    test('  - should return 0, 12 when input [12, 0]', () => {
      const result = poae.nestedLoops([0, 12]);
      expect(result).toEqual(12);
    });
  });

  describe('b. Min Max', () => {
    test('  - should return 180 when input [-2, 6, -3, -10, 0, 2]', () => {
      const result = poae.minMax([-2, 6, -3, -10, 0, 2]);
      expect(result).toEqual(180);
    });

    test('  - should return 0, 12 when input [12, 0]', () => {
      const result = poae.minMax([0, 12]);
      expect(result).toEqual(12);
    });
  });
});
