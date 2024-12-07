const solution = (p) => {
  const stack = [];
  const result = Array(p.length).fill(0);
  // p를 순회하면서
  for (let i = 0; i < p.length; i++) {
    // stack에 있는 마지막 index의 값으로 이전 가격을 비교한다.

    // 만약 현재 가격이 이전 가격보다 작다면
    // [2, 3, 1]을 예로 들어보면
    // stack에 [2, 3]이 있고 현재 가격이 1인 상태일 경우에
    // 3과 1을 비교하여 result에 값을 저장하고
    // 마찬가지로 2와 1도 비교해야하므로 while문을 사용하여 계속 비교를 해줘야한다.
    while (stack.length > 0 && p[stack[stack.length - 1]] > p[i]) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }

    // 그렇지 않다면
    // stack에 index를 저장한다.
    stack.push(i);
  }

  // stack에 남아있는 index는 계속해서 주식가격이 증가 또는 유지 되었다는 의미이다.
  // 나머지를 계산한다.
  for (const idx of stack) {
    result[idx] = p.length - idx - 1;
  }

  // result를 반환한다.
  return result;
}

console.log(solution([1, 2, 3, 1, 2, 3, 3, 1, 2]));