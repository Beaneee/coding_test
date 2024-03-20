function solution(s) {
  const arr = s.split('');
  
  if(isNaN(Number(arr[0]))) {
      //나머지 붙여서 숫자로 변환
      let sign = arr[0] + 1;
      let numStr = '';
      for(let i = 1; i < arr.length; i++) {
          numStr += arr[i];
      }
      return Number(sign) * Number(numStr);
  }
  return Number(s);
}