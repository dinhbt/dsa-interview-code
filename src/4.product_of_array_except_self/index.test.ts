import ProductOfArrayExpectSelf from './index';

describe('4. Product of Array Except Self', () => {
  const poae = new ProductOfArrayExpectSelf();

  describe('a. Nested loop', () => {
    test('  - should return 180, 600, 360, 300, 900 when input [10, 3, 5, 6, 2]', () => {
      const result = poae.nestedLoop([10, 3, 5, 6, 2]);
      expect(result).toEqual([180, 600, 360, 300, 900]);
    });

    test('  - should return 0, 12 when input [12, 0]', () => {
      const result = poae.nestedLoop([12, 0]);
      expect(result).toEqual([0, 12]);
    });
  });

  describe('b. Prefix and suffix', () => {
    test('  - should return 180, 600, 360, 300, 900 when input [10, 3, 5, 6, 2]', () => {
      const result = poae.prefixSubffix([10, 3, 5, 6, 2]);
      expect(result).toEqual([180, 600, 360, 300, 900]);
    });

    test('  - should return 0, 12 when input [12, 0]', () => {
      const result = poae.prefixSubffix([12, 0]);
      expect(result).toEqual([0, 12]);
    });
  });
});
