export default class ContainerWithMostWater {
  /**
   *  5      |
   *  4      |    |
   *  3      |    |    |
   *  1   |  |    |    |
   *
   *
   * i = 0
   * j = 1
   * Min (1, 5) = 1
   * Distance = 1 - 0 = 1
   * Max (1, (Min * Distance))
   *    * @param array
   */

  nestedLoop = (array: number[]) => {
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
        let min = Math.min(array[i], array[j]) * (j - i);
        max = Math.max(max, min);
      }
    }
    return max;
  };
}
