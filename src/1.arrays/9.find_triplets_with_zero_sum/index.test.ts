import FindAllTripletsWithZeroSum from './index';

describe('9. Sum – Find All Triplets with Zero Sum', () => {
  const s = new FindAllTripletsWithZeroSum();

  describe('Nested Loop', () => {
    test('  - should return [[0, 1, 4], [2, 3, 4]] when input [1, -2, 1, 0, 5]', () => {
      const result = s.nestedLoop([1, -2, 1, 0, 5]);
      expect(JSON.stringify(result)).toEqual(JSON.stringify([[0, 1, 2]]));
    });

    test('  - should return [[0, 1, 2] ]when input [0, -1, 2, -3, 1]', () => {
      const result = s.nestedLoop([0, -1, 2, -3, 1]);
      expect(JSON.stringify(result)).toEqual(
        JSON.stringify([
          [0, 1, 4],
          [2, 3, 4],
        ])
      );
    });
  });
});
