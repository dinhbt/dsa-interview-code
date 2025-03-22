export default class StockBuySell {
  nestedLoop = (array: number[]): number => {
    let maxProfit = 0;

    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        const profit = array[j] - array[i];
        maxProfit = Math.max(maxProfit, profit);
      }
    }

    return maxProfit;
  };

  traversal = (array: number[]): number => {
    let min = array[0],
      maxProfit = 0;

    for (let i = 1; i < array.length; i++) {
      min = Math.min(min, array[i]);

      maxProfit = Math.max(maxProfit, array[i] - min);
    }

    return maxProfit;
  };
}
