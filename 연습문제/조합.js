const getCombinations = (arr, selectNum) => {
  // 종료 조건
  if (selectNum === 0) return [[]];
  if (arr.length === 0) return [];

  const [first, ...rest] = arr;

  // 1. 첫번째를 포함하고
  const firstWith = getCombinations(rest, selectNum - 1).map((v) => [first, ...v]);

  // 2. 첫번째를 제외하고
  const firstWithout = getCombinations(rest, selectNum);

  return firstWith.concat(firstWithout);
}

const solution = (arr, n) => {
  return getCombinations(arr, n);
}

const answer = solution(["Alice", "Bob", "Charlie", "David", "Eve"], 2);
