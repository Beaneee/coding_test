function solution(n, s) {
  if(n > s) return [-1];
  let answer = [];

  while (true) {
    let value = Math.floor(s / n);
    answer.push(value);
    s = s - value;
    n = n - 1;

    if(s === 0) break;
  }

  return  answer
}