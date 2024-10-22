function solution(s){
  let answer = true;
  
  let count = 0;
  
  for(let i = 0; i < s.length; i++) {
      if(s[i] === '(') {
          count++;
      } else {
          if(count > 0) {
              count--;
          } else {
              answer = false;
              break;
          }
      }
  }
  
  if(count !== 0) {
      answer = false;
  }
  return answer;
}