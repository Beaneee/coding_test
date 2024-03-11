function solution(n,a,b) {
  let total = n;
  let max = Math.max(a,b);
  let min = Math.min(a,b);
  
  let count = 1;
  
  while(total !== 1) {
      
      if(max - min === 1) {
          return count
      }
      
      total = total / 2;
      count++;
      
      max % 2 === 0 ? max = max / 2 : max = (max + 1) / 2;
      min % 2 === 0 ? min = min / 2 : min = (min + 1) / 2;
      solution(total, max, min);
  }
}