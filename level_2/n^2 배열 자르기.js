function solution(n, left, right) {
  //1. n * n 행렬 만들기
  let matrix = [];
  
  for(let i = 0; i < n; i++) { //행
      matrix[i] = []; //초기화하지 않고 사용하면 undefined
      for(let j = 0; j < n; j ++) { //열
          if(i >= j) { //1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
              matrix[i][j] = i + 1;
          } else {
              matrix[i][j] = j + 1;
          }
      }
  }
  
  //1차원 배열로 만들기
  let arr = [];
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          arr.push(matrix[i][j]);
      }
  }
   
  return arr.slice(left, right + 1)
}