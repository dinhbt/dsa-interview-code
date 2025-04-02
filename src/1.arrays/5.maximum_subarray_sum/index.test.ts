import MaxiumSubArraySum from './index';

describe('5. Maximum sub array sum', () => {
  const poae = new MaxiumSubArraySum();

  describe('a. Nested loop', () => {
    test('  - should return 11 when input [2, 3, -8, 7, -1, 2, 3]', () => {
      const result = poae.nestedLoop([2, 3, -8, 7, -1, 2, 3]);
      expect(result).toEqual(11);
    });

    test('  - should return 0, 12 when input [12, 0]', () => {
      const result = poae.nestedLoop([0, 12]);
      expect(result).toEqual(12);
    });
  });

  describe('b. Kadane’s Algorithm', () => {
    test('  - should return 11 when input [2, 3, -8, 7, -1, 2, 3]', () => {
      const result = poae.kadanesAlgorithm([2, 3, -8, 7, -1, 2, 3]);
      expect(result).toEqual(11);
    });

    test('  - should return 0, 12 when input [12, 0]', () => {
      const result = poae.kadanesAlgorithm([0, 12]);
      expect(result).toEqual(12);
    });
  });
});
