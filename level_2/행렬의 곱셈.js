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

  for(let k = 0; k < arr1.length; k++) {
    let a = [];
    for(let l = 0; l < arr2Column.length; l++) {
      let count = 0;
      for(let m = 0; m < arr2Column[l].length; m++) {
        count += (arr1[k][m] * arr2Column[l][m]);
      }
      a.push(count);
    }
    result.push(a);
  }

  return result
}