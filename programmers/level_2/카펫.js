function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;
  let m = [];
  let result = [];
  
  //약수를 구하는게 핵심
  for (let i=1; i <= sum; i++) {
      if(sum % i === 0) {
          m.push(i);
      }
  }    
  
  //(w*2) + (h*2) - 4 = brown일때 조건이 성립됨. -> 짝을 찾으면 됨.
  for (let j=0; j < m.length; j++) {
      for (let k=0; k < m.length; k++) {
          let w = m[j];
          //h값 찾기
          if(w >= m[k] && w*m[k] === sum) {
              let h = m[k];
              result.push([w, h]);
          }
      }
  }
  
  for (let a=0; a < result.length; a++) {
      if((result[a][0] * 2) + (result[a][1] * 2) - 4 === brown) {
          answer.push(result[a]);
      }
  }
  
  
  return answer[0];
}