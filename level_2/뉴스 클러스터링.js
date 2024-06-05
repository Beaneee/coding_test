function solution(str1, str2) {
  //문자만 남겨둔다
  let reg = /[^A-Z]/g;
  const upperCaseStr1 = str1.toUpperCase().replace(reg, '');
  const upperCaseStr2 = str2.toUpperCase().replace(reg, '');

  //두글자씩 끊어서 배열을 만든다.
  let str1Arr = [];
  let str2Arr = [];

  for(let i = 0; i < upperCaseStr1.length; i++) {
    const sliceStr = upperCaseStr1.slice(i, i + 2);
    
    if(sliceStr.length > 1) {
      str1Arr.push(sliceStr);
    }
  }

  for(let i = 0; i < upperCaseStr2.length; i++) {
    const sliceStr = upperCaseStr2.slice(i, i + 2);

    if(sliceStr.length > 1) {
      str2Arr.push(sliceStr);
    }
  }

  //교집합, 합집합 비교한다.
  console.log(str1Arr, str2Arr);
  //교집합(중복도 허용한다)

  //합집합
  const union = [...new Set([...str1Arr, ...str2Arr])].length;
  console.log(union);
}