export default class MaxiumSubArraySum {
  /**
   *
   * @param array Input: arr[] = {2, 3, -8, 7, -1, 2, 3}
   * Output: 11
   * Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.
   * /**
   * i = 0 => result = 0; subtemp = 0;
   * 	j = 1 subtemp = 5; result = 5
   * 	j = 2 subtemp = -3; result = 5
   * 	j = 3 subtemp = 4; result = 5
   * 	j = 4 subtemp = 3; result = 5
   * 	j = 5 subtemp = 6; result = 6
   * 	j = 6 subtemp = 9; result = 9
   *
   * i = 1 => result = 9; subtemp = 0;
   * 	j = 2 subtemp = -5; result = 9
   * 	j = 3 subtemp = 2; result = 9
   * 	j = 4 subtemp = 1; result = 9
   * 	j = 5 subtemp = 3; result = 9
   * 	j = 6 subtemp = 6; result = 9
   *
   * i = 2 => result = 9; subtemp = 0;
   * 	j = 3 subtemp = -1; result = 9
   * 	j = 4 subtemp = -2; result = 9
   * 	j = 5 subtemp = 0; result = 9
   * 	j = 6 subtemp = 3; result = 9
   *
   * i = 3 => result = 9; subtemp = 0;
   * 	j = 4 subtemp = 6; result = 9
   * 	j = 5 subtemp = 8; result = 9
   * 	j = 6 subtemp = 11; result = 11
   *
   * i = 4 => result = 11; subtemp = 0;
   * 	j = 5 subtemp = 1; result = 11
   * 	j = 6 subtemp = 11; result = 11
   *
   * i = 5 => result = 11; subtemp = 0;
   * 	j = 6 subtemp = 5; result = 11
   * 6 => result = 11; subtemp = 0;
   * 	j = 3 subtemp = 3; result = 11
   */
  nestedLoop = (array: number[]): number => {
    let result = array[0];

    for (let i = 0; i < array.length; i++) {
      let sumtemp = 0;
      for (let j = i; j < array.length; j++) {
        sumtemp = sumtemp + array[j];
        result = Math.max(result, sumtemp);
      }
    }
    return result;
  };

  /**
   *
   * @param array arr[] = {2, 3, -8, 7, -1, 2, 3}
   * @returns
   */
  kadanesAlgorithm = (array: number[]): number => {
    let result = 0;
    let maxSumAt = 0;

    for (let i = 0; i < array.length; i++) {
      maxSumAt = Math.max(array[i], array[i] + maxSumAt);
      result = Math.max(result, maxSumAt);
    }
    return result;
  };
}
