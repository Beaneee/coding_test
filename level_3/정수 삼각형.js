function solution(triangle) {
  const n = triangle.length;

  // 아래층부터 시작하여 위층으로 올라가며 최대 합 계산
  for (let i = n - 2; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
          // 현재 위치의 숫자에 아래층에서 왼쪽이나 오른쪽에서 올 수 있는 최대 합을 더하여 업데이트
          triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
      }
  }

  // 맨 꼭대기에 위치한 값이 최종적으로 거쳐간 숫자의 최대 합
  return triangle[0][0];
}