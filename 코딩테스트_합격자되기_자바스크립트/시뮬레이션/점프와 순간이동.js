function solution(n) {
  if (n === 1) return 1;

  // 짝수
  if (n % 2 === 0) {
    return solution(n / 2);
  } else {
    // 홀수
    // 한칸 이동하고 순간이동 시작
    // 홀수를 순간이동 시키려면 n - 1을 해야한다.
    return solution(((n - 1) / 2)) + 1;
  }

}