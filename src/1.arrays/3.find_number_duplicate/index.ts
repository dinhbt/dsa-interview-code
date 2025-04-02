export default class FindNumberDuplicate {
  usingMap = (array: number[]): number[] => {
    let map = new Map();
    const result = [];

    for (let num of array) {
      const current = map.get(num) ?? 0;
      map.set(num, current + 1);
    }

    map.forEach((value, key) => {
      if (value > 1) {
        result.push(key);
      }
    });

    return result;
  };
}
