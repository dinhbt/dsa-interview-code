export default class ProductOfArrayExpectSelf {
  nestedLoop = (array: number[]): number[] => {
    if (array.length <= 1) return [];

    const result = new Array(array.length).fill(1);

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i !== j) {
          result[i] = result[i] * array[j];
        }
      }
    }

    return result;
  };

  prefixSubffix = (array: number[]): number[] => {
    const prefix = new Array(array.length).fill(1);
    const subffix = new Array(array.length).fill(1);
    const result = new Array(array.length).fill(1);

    for (let i = 1; i < array.length; i++) {
      prefix[i] = array[i - 1] * prefix[i - 1];
    }

    for (let i = array.length - 2; i >= 0; i--) {
      subffix[i] = array[i + 1] * subffix[i + 1];
    }

    for (let i = 0; i < array.length; i++) {
      result[i] = prefix[i] * subffix[i];
    }

    return result;
  };
}
