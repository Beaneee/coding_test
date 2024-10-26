function solution(arr1, arr2) {
  // arr1에 있는 배열은
  // arr2에 있는 모든 배열과 곱해서 더해져야한다.
  // 단, 같은 index를 가진 요소로만 곱해져야한다.

  // 배열을 2차원으로 초기화 하고
  const result =  new Array(arr1.length).fill(0).map(() => new Array(arr2.length));

  // arr2 배열을 다시 세팅해야 한다. 예를들어 ,[5, 2, 3] 이렇게 index로 세팅되어야한다. -> 이것도 함수로 만들자.
  const transformArr2 = transformArr(arr2);
  for (const [indexArr1, arr1Element] of arr1.entries()) {

    for (const [indexArr2, arr2Element] of transformArr2.entries()) {
      // 결국 쉽게 생각하면 [1, 4] 와 [3, 3] 즉, 1차원 배열끼리의 곱셈이다. -> 이걸 함수로 만든다면??
      const sum = calculateArr(arr1Element, arr2Element);
      result[indexArr1][indexArr2] = sum;
    }
  }
  // 결과를 반환한다.
  return result;
}

/**
 * index를 맞춰서! 1차원 배열끼리 곱셈
 * @param arr1
 * @param arr2
 * @returns {number}
 */
const calculateArr = (arr1, arr2) => {
  let sum = 0;
  for (const [index, arr1Element]  of arr1.entries()) {
    sum += arr1Element * arr2[index];
  }
  return sum
}

/**
 * 행렬을 배열로 변환
 * @param matrix
 * @returns {*}
 */
const transformArr = (matrix) => {
  return matrix[0].map((_, index) => matrix.map(row => row[index]))
}