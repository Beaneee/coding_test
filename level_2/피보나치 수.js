function solution(n) {
  //피보나치수열을 배열로 만들어볼까?
  let arr = [0, 1];
  
  for(let i = 2; i <= n; i++) {
      arr.push(arr[i-2] + arr[i-1]); //배열로 해서 실패하는건가? -> infinity
  }
  let result = arr[n] % 1234567
  
  return result;
}