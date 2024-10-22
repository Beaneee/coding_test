//피보나치 수열
function solution(n) {
  //n이 1일 경우
  if(n == 1) return 1;
  //f1, f2
  let arr = [1, 2];
  
  for(i = 2; i < n; i++) {
      arr.push((arr[i - 1] + arr[i - 2]) % 1234567) 
  }
    
  return arr[arr.length - 1]
}