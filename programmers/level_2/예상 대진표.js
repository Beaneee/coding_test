function solution(n,a,b) {
  let total = n;
  let max = Math.max(a,b);
  let min = Math.min(a,b);
  
  let count = 1;
  
  while(total !== 1) {
    max % 2 === 0 ? max = max / 2 : max = (max + 1) / 2;
    min % 2 === 0 ? min = min / 2 : min = (min + 1) / 2;

    if(Math.ceil(max) === Math.ceil(min)) {
      return count;
    }

    total = total / 2;
    count++;
  }
}

//틀린 이유
//종료 조건이 잘못되었다.
//예를들어, 2-3일 경우에도 max - min = 1이다.

//종료조건은 max === min이다.
// if(max - min === 1) {
//   return count
// }