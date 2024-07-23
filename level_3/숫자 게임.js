function solution(A, B) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    const a = A[i];
    //a보다 큰 값들 중에서
    const largerB = B.filter(b => b >= a);
    let max = Math.max(...largerB);
    let removeIdx = B.findIndex(v => v === max);
    //i+1보다 i가 작거나 같다면 2번째로 큰 수
    if(A[i + 1] && A [i + 1] >= a) {
      const second = findSecondMaxNumber(largerB);
      removeIdx = B.findIndex(v => v === second);
    }
    //i+1보다 i가 크거나 같다면 1번째로 큰 수
    //가장 큰 값을 가져간다.
    const removeNum = B.splice(removeIdx, 1)[0];
    //남은 값 중 최대값이 a보다 작다면 return
    if(removeNum < a) continue;
    result.push(removeNum);
  }
  return result.length;
}

/**
 * 두번째로 큰 값 찾기
 */
const findSecondMaxNumber = (arr) => {
  const max = Math.max(...arr);
  let second = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if(value < max && value >= second) {
      second = value;
    }
  }

  return second
}