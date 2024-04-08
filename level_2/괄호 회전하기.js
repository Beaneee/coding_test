function solution(s) {
  let n = 0;
  let str = s;
  
  while(n < s.length) {
      str = str.slice(1, s.length) + str.slice(0,1);
      n++
  } 
}