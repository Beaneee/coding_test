function solution(topping) {
  let spliceNum = 1;
  spliceTopping(spliceNum, topping);
}

const spliceTopping = (spliceNum, arr) => {
  if(spliceNum === arr.length) return
  let copyArr = [];
  let a = [];
  let b = [];

  for (let i = 0; i < arr.length; i++) {
    copyArr = arr.slice();
    b = [...new Set(copyArr.splice(i, spliceNum))];
    a = [...new Set(copyArr)];

    if(a.length === b.length) {
      console.log(a, b);
    }
  }
  spliceTopping(spliceNum + 1, arr);
}