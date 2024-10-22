function solution(n) {
  let answer = -1;

  for(let i = 0; i <= n; i++) {
    if(i * i === n) {
      //50000000000000번 까지 돌기전에 답이 나오면 return하는 버릇을 들이자
      return (i + 1) * (i + 1)
    }
  }
  return answer
}