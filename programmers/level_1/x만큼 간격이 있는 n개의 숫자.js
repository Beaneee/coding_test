function solution(x, n) {
  const result = [];
  let initNum = x;

  for (let i = 0; i < n; i++) {
    result.push(initNum);
    initNum += x;
  }

  return result;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));