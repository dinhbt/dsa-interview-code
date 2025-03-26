export default class MaxiumProductSubArray {
  nestedLoops = (array: number[]): number => {
    if (array.length <= 1) return 0;

    let max = array[0];

    for (let i = 1; i < array.length; i++) {
      let temp = 1;
      for (let j = i; j < array.length; j++) {
        temp = temp * array[j];
        if (temp > max) {
          max = temp;
        }
      }
    }
    return max;
  };

  private maxCompare = (a: number, b: number, c: number) => {
    return a > b ? (a > c ? a : c) : b > c ? b : c;
  };

  private minCompare = (a: number, b: number, c: number) => {
    return a < b ? (a < c ? a : c) : b < c ? b : c;
  };

  minMax = (array: number[]): number => {
    let currMin = array[0];
    let currMax = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
      const temp = this.maxCompare(
        array[i] * currMax,
        array[i] * currMin,
        array[i]
      );
      currMin = this.minCompare(
        array[i] * currMax,
        array[i] * currMin,
        array[i]
      );
      currMax = temp;
      max = this.maxCompare(max, max, currMax);
    }
    return max;
  };
}
