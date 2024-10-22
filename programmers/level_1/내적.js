function solution(a, b) {
  var answer = 0;
  let i = 0;
  let count = 0;
  
  for (i=0; i < a.length; i++) {
      count = a[i] * b[i];
      answer += count;
  }
  
  return answer;
}