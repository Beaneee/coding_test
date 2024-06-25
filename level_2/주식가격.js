function solution(prices) {
  const n = prices.length;
  const result = Array(n).fill(0); // 결과를 저장할 배열
  const stack = []; // 인덱스를 저장할 스택

  for (let i = 0; i < n; i++) {
    // 스택이 비어 있지 않고 현재 가격이 스택의 맨 위 가격보다 작으면
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      const idx = stack.pop(); // 스택에서 인덱스를 꺼낸다
      result[idx] = i - idx; // 현재 인덱스와 스택에서 꺼낸 인덱스의 차이를 결과에 저장
    }
    stack.push(i); // 현재 인덱스를 스택에 추가
  }

  // 스택에 남아 있는 인덱스에 대해 처리
  while (stack.length) {
    const idx = stack.pop();
    result[idx] = n - 1 - idx; // 끝까지 가격이 떨어지지 않은 기간을 결과에 저장
  }

  return result;
}
