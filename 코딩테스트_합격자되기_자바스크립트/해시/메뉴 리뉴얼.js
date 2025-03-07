function getCombinations(arr, selectNum) {
  // 종료 조건
  if (selectNum === 0) return [[]]; // 0개를 뽑으면 빈 배열
  if (arr.length === 0) return []; // 원소가 없으면 빈 결과 반환

  // first를 뽑는다.
  const [first, ...rest] = arr;

  // 1. first를 포함하는 조합
  const withFirst = getCombinations(rest, selectNum - 1).map(comb => [first, ...comb]);

  // 2. first를 포함하지 않는 조합
  const withoutFirst = getCombinations(rest, selectNum);

  return withFirst.concat(withoutFirst);
}

function solution(orders, course) {
  const result = [];
  // course를 순회해서 코스 요리를 구성할 개수로

  // orders에서 생성할 수 있는 조합을 구한다.

  // 조합-count를 hash로 구성한다.

  // 가장 많은 count를 가진 key를 result에 push한다.

  return result
}