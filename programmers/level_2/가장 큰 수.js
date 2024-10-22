function solution(numbers) {
  //(a,b); : (next, prev);
  // num => num + '' : 문자열로 만들어주기
  // sort((a,b) => (b+a) - (a+b)) : 비교정렬해서 작은 값은 버리기
  let answer = numbers.map(num => num + '').sort((a,b) => (b+a) - (a+b)).join('');
  
  //[0, 0, 0, 0]인 경우
  answer = answer[0] === '0' ? '0' : answer;
  
  return answer;
}