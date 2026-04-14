function solution(N) {
  const result = [];

  function backTrack(sum, selectedNum, start) {
    if (sum === 10) {
      result.push(selectedNum);
      return;
    }

    for (let i = start; i <= N ; i++) {
      // 유망 함수: 합이 10보다 작거나 같다면
      if (sum + i <= 10) {
        backTrack(sum + i, [...selectedNum, i] ,i + 1);
      }
    }
  }

  backTrack(0, [], 1);
  return result;
}

console.log(solution(5));
console.log(solution(2));
console.log(solution(7));