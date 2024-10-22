function solution(str1, str2) {
  //대문자만 남겨둔다
  const upperCaseStr1 = str1.toUpperCase()
  const upperCaseStr2 = str2.toUpperCase()

  //두글자씩 끊어서 배열을 만든다.
  let str1Arr = [];
  let str2Arr = [];

  pushArray(upperCaseStr1, str1Arr);
  pushArray(upperCaseStr2, str2Arr);
  const intersection = [];
  const union = [];

  str1Arr.forEach(v => {
    const index = str2Arr.indexOf(v);
    if (index !== -1) {
      intersection.push(v); // 교집합에 추가
      str2Arr.splice(index, 1); // str2Arr에서 중복된 원소 제거
    }
    union.push(v); // 합집합에 추가
  });
  str2Arr.forEach(v => union.push(v)); // str2Arr의 나머지 원소들을 합집합에 추가

  //마지막 case
  if(intersection.length === 0 && union.length === 0) return 65536

  return Math.floor((intersection.length / union.length) * 65536)
}

/**
 * 대문자 판별
 * @param {*} str  
 */
const isLetter = (str) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return letters.includes(str[0]) && letters.includes(str[1])
}

/**
 * 유효성 검사 후 array push
 * @param {*} strArr 
 * @param {*} arr 
 */
const pushArray = (strArr, arr) => {
  for(let i = 0; i < strArr.length; i++) {
    const sliceStr = strArr.slice(i, i + 2);
    
    if(sliceStr.length > 1 && isLetter(sliceStr)) {
      arr.push(sliceStr);
    }
  }
}