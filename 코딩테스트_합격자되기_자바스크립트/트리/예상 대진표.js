function solution(n,a,b) {
  let round = 0;
  // 최후의 승자까지 계속해서 반복한다.
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round+=1;
  }
  return round;
}