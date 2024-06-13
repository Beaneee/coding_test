function solution(triangle) {
  //재귀로 푸니까 시간초과가 난다.
  //반복문으로 풀어보자.
  for(let i = 1; i < triangle.length; i++) {
    for(let j = 0; j < triangle[i].length; j++) {
      const prevRight = triangle[i - 1][j] ?? 0;
      const prevLeft = triangle[i - 1][j - 1] ?? 0;
      //이전에 방문한 삼각형의 최대값
      triangle[i][j] += Math.max(prevLeft, prevRight)
    }
  }
  return Math.max(...triangle[triangle.length - 1])
} 
