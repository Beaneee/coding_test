function solution(n, left, right) {
  //1. n * n 행렬 만들기
  let matrix = [];
  let arr = [];
  
  for(let i = 0; i < n; i++) { //행
      matrix[i] = []; //초기화하지 않고 사용하면 undefined
      for(let j = 0; j < n; j ++) { //열
          if(i >= j) { //1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
              matrix[i][j] = i + 1;
              arr[(i + j) + (i * 2)] = i + 1 //자르기
          } else {
              matrix[i][j] = j + 1;
              arr[(i + j) + (i * 2)] = j + 1
          }
      }
  }
  console.log(arr)
}