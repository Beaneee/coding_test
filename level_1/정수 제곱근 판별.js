function solution(n) {
  let answer = -1;

  for(let i = 0; i < n; i++) {
    if(i * i === n) {
      answer = (i + 1) * (i + 1)
    }
  }
  return answer
}