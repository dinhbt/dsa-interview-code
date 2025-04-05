export default class FindAllTripletsWithZeroSum {
  // {0, -1, 2, -3, 1}
  /**
   * i = 0; j = 1; k = 2 => a[i]=0; a[j]=-1; a[k]=2; total = -1
   * i = 0; j = 1; k = 3 => a[i]=0; a[j]=-1; a[k]=-3; total = -4
   * i = 0; j = 1; k = 4 => a[i]=0; a[j]=-1; a[k]=1; total = 0 ==> result
   *
   * i = 0; j = 2; k = 3 => a[i]=0; a[j]=2; a[k]=-3; total = -1
   * i = 0; j = 2; k = 4 => a[i]=0; a[j]=2; a[k]=1; total = 3
   *
   * i = 0; j = 3; k = 4 => a[i]=0; a[j]=2; a[4]=1; total = 3
   *
   * i = 1; j = 2; k = 3 => a[i]=-1; a[j]=2; a[4]=-3; total = 2
   * i = 1; j = 2; k = 4 => a[i]=-1; a[j]=2; a[4]=1; total = 2
   * i = 1; j = 3; k = 4 => a[i]=-1; a[j]=-3; a[4]=1; total = -3
   *
   * i = 2; j = 3; k = 4 => a[i]=2; a[j]=-3; a[4]=1; total = 0 ===> result
   */
  nestedLoop = (array: number[]) => {
    let result = [];
    const length = array.length;

    for (let i = 0; i < length - 2; i++) {
      for (let j = i + 1; j < length - 1; j++) {
        for (let k = j + 1; k < length; k++) {
          if (array[i] + array[j] + array[k] === 0) {
            result.push([i, j, k]);
          }
        }
      }
    }
    return result;
  };
}
