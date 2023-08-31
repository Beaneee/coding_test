function solution(s) {
  let answer = '';
  
  let splitStr = s.split(' '); //공백문자가 연속해서 나올 수 있다.
  
  answer = splitStr.map((s) => {
      let str = s.toLowerCase().split('');
      
      //공백문자가 연속으로 나올 시 예외처리;
      if(str.length === 0) {
          return
      }
      str[0] = str[0].toUpperCase();
      return str.join('');
  }).join(' ')
  
  return answer;
}
