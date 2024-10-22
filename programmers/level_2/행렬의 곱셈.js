/**
 * 열을 추출하면 배열로 반환
 * @param {*} matrix 
 */
function transposeMatrix(matrix) {
  return matrix[0].map((_, index) => matrix.map(row => row[index]))
}


function solution(arr1, arr2) {
  const arr2Column = transposeMatrix(arr2);
  let result = [];

  for(row of arr1) {
    const newRow = arr2Column.map((column) => 
      row.reduce((acc, val, index) => acc + val * column[index], 0)
    )
    result.push(newRow);
  }

  return result
}