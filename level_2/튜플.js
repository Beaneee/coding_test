function solution(s) {
  let strArr = s.split('},')
  let replaceArr = [];
  let result = [];
  //문자열을 배열로 만들고
  for(let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].replace(/{/g, '').replace(/}/g, '').split(',').sort();
    replaceArr.push(strArr[i])
  }
  //길이가 짧은 순으로 sort후
  replaceArr.sort((a, b) => a.length - b.length);

  for(let j = 0; j < replaceArr.length; j++) {
    for(let k = 0; k < replaceArr[j].length; k++) {
      const value = Number(replaceArr[j][k]);
      if(!result.includes(value)) {
        result.push(value);
      }
    }
  }
  return result;
} 