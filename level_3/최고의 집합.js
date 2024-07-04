function solution(n, s) {
  if(n > s) return [-1];
  let answer = [];

  while (n > 0) {
    let value = Math.floor(s / n);
    answer.push(value);
    s = s - value;
    n = n - 1;
  }

  return  answer
}