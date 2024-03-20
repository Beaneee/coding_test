function solution(n) {
  let arr = []
  
  for(let i = 0; i <= n; i++) {
      if(n % i === 0) {
          arr.push(i)
      }
  }
  
  let sum = 0;
  
  for(let j = 0; j < arr.length; j++) {
      sum += arr[j]
  }
  
  return sum
}