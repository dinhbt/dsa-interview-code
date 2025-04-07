import ContainerWithMostWater from './index';

describe('10. Sum – Find All Triplets with Zero Sum', () => {
  const s = new ContainerWithMostWater();

  describe('a. Nested Loop', () => {
    test('  - should return 6 when input [1, 5, 4, 3]', () => {
      const result = s.nestedLoop([1, 5, 4, 3]);
      expect(result).toEqual(6);
    });

    test('  - should return 12 when input [3, 1, 2, 4, 5]', () => {
      const result = s.nestedLoop([3, 1, 2, 4, 5]);
      expect(result).toEqual(12);
    });
  });

  describe('b. Two pointer', () => {
    test('  - should return 6 when input [1, 5, 4, 3]', () => {
      const result = s.twoPointer([1, 5, 4, 3]);
      expect(result).toEqual(6);
    });

    test('  - should return 12 when input [3, 1, 2, 4, 5]', () => {
      const result = s.twoPointer([3, 1, 2, 4, 5]);
      expect(result).toEqual(12);
    });
  });
});
