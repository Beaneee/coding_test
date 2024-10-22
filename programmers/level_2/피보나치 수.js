// BigInt 는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.

function solution(n) {
  //피보나치수열을 배열로 만들어볼까?
  let arr = [0n, 1n];
  
  for(let i = 2; i <= n; i++) {
      arr.push(BigInt(arr[i-2]) + BigInt(arr[i-1])); //배열로 해서 실패하는건가? -> infinity
  }
  let result = arr[n] % 1234567n
  
  return result;
}