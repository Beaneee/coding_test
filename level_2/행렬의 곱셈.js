function solution(arr1, arr2) {
  //arr2를 변환 시키자.
  let arr2Column = [];
  let result = [];

  for(let i = 0; i < arr2[0].length; i++) {
    let temp = [];
    for(let j = 0; j < arr2.length; j++) {
      temp.push(arr2[j][i]);
    }
    arr2Column.push(temp);
  }

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