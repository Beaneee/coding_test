function solution(A,B){
  let answer = 0;
  let arrA = A.sort((a, b) => b - a);
  let arrB = B.sort((a, b) => a - b);
  
  for(let i = 0; i < A.length; i++) {
      let result = arrA[i] * arrB[i];
      answer += result;
  } 
  return answer;
}