/**
 * 완전 탐색
 */
 function solution(triangle) {
  let allPath = [];
  traverseTriangle(triangle, 0, 0, [], allPath);
  let allPathSum = setArrElementSum(allPath);
  return Math.max(...allPathSum)
}

/**
 * 삼각형 순회
 * @param {*} triangle 
 * @param {*} row 
 * @param {*} col 
 * @param {*} path 
 */
const traverseTriangle = (triangle, row, col, path, allPath) => {
  path.push(triangle[row][col]);

  if(row === triangle.length - 1) {
    allPath.push([...path])
    return
  }

  traverseTriangle(triangle, row + 1, col, [...path], allPath)
  traverseTriangle(triangle, row + 1, col + 1, [...path], allPath)
}
