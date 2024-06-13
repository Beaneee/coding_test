function solution(triangle) {
  return traverseTriangle(triangle, 0, 0);
}

/**
 * 삼각형 순회 및 최대 경로 합 계산
 * @param {*} triangle 
 * @param {*} row 
 * @param {*} col 
 */
const traverseTriangle = (triangle, row, col) => {
  // Base case: 가장 아래 행에 도달한 경우
  if (row === triangle.length - 1) {
    return triangle[row][col];
  }

  // 현재 위치에서 아래로 내려가는 두 경로의 합 중 최대값을 선택하여 리턴
  let leftPathSum = traverseTriangle(triangle, row + 1, col);
  let rightPathSum = traverseTriangle(triangle, row + 1, col + 1);

  return triangle[row][col] + Math.max(leftPathSum, rightPathSum);
}