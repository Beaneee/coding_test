function solution(num) {
  let n = num;
  let count = 0;

  // 주어진 수가 1인 경우
  if(n === 1) return 0;

  while (n > 1) {
    // 종료 조건
    if (count >= 500) return -1;

    count++;
    // 짝수
    if (n % 2 === 0) {
      n = n / 2;
      continue;
    }

    // 홀수
    if (n % 2 === 1) {
      n = (3 * n) + 1;
      continue;
    }

  }

  return count;
}