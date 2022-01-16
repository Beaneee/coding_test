function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;
  let m = [];
  //약수를 구하는게 핵심
  for (let i=1; i <= sum; i++) {
      if(sum % i === 0) {
          m.push(i);
      }
  }    
  
  
  return answer;
}