function solution(n) {
  let min = n - 1;
  for (let i = n; i > 0; i--) {
      if(n % i === 1) {
          min = i
      }
  }
  
  return min
}