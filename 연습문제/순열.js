const getPermutations = (arr, selectNum) => {
  // 종료조건
  if (selectNum === 0) return [[]]; // 0개를 뽑으면 빈 배열만 포함된 배열 반환
  const result = [];

  arr.forEach((fixed, idx, origin) => {
    // fixed를 제외한 나머지를 뽑고
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];

    // 나머지로 가능한 순열
    const perms = getPermutations(rest, selectNum - 1);

    // fixed랑 붙여줌
    const attached = perms.map(v => [fixed, ...v]);

    result.push(...attached);
  })
  return result;
}

const solution = (arr, n) => {
  return getPermutations(arr, n);
}

const answer = solution(["JavaScript", "TypeScript", "React"], 2);
console.log(answer)