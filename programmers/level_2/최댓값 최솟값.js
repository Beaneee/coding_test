function solution(s) {
  let answer = '';
  let splitStr = s.split(' ');
  
  const maxNum = Math.max(...splitStr);
  const minNum = Math.min(...splitStr);
  
  answer = `${minNum} ${maxNum}`
  
  return answer;
}

function solution2(s) {
  let splitStr = s.split(' ');
  return `${Math.min(...splitStr)} ${Math.max(...splitStr)}`
}