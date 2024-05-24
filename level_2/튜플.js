function solution(s) {
  let strArr = s.split('},')
  let arr = [];

  for(let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].replace(/{/g, '').replace(/}/g, '').split(',').sort();
    arr.push(strArr[i])
  }
  arr.sort((a, b) => a.length - b.length);
  console.log(arr);
}