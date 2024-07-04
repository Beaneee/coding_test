function solution(n, s) {
  let max = 0;
  let answer = [];

  for(let i = 1; i <= 10000; i++) {
    for(let j = 1; j <= 10000; j++) {
      if(i <= j) {
        if(i + j === s) {
          if(max < i * j) {
            max = i * j;
            answer = [i, j];
          }
        }
      }
    }
  }

  return max ? answer : [-1]
}