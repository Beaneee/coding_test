function solution(n, left, right) {
  //1. n * n 행렬 만들기
  let arr = [];
  for(let i = 0; i < n; i++) { //행
      arr[i] = []; //초기화하지 않고 사용하면 undefined
      for(let j = 0; j < n; j ++) { //열
          if(i >= j) { //1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
              arr[i][j] = i + 1;
          } else {
              arr[i][j] = j + 1;
          }
      }
  }
  console.log(arr);
}