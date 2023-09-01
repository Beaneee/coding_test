// 1.
// function solution(A,B){
//   let answer = 0;
//   let arrA = A.sort((a, b) => b - a);
//   let arrB = B.sort((a, b) => a - b);
  
//   for(let i = 0; i < A.length; i++) {
//       let result = arrA[i] * arrB[i];
//       answer += result;
//   } 
//   return answer;
// }

// 2. 리팩토링 -> use reduce
function solution(A,B){
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);
  
  return A.reduce((acc, curr, idx) => acc + curr * B[idx], 0);
}