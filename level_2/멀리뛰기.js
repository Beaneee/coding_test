//피보나치 수열
function solution(n) {
  //f1, f2
  let arr = [1, 2];
  
  for(i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2])
  }
  
  return arr[arr.length - 1] % 1234567
}