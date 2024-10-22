//stack 자료구조를 사용해야 한다.
function solution(s) {
  let n = 0;
  let str = s;
  let result = 0;
  
  while(n < s.length) {
      if(isValid(str)) {
        result++
      }
      str = str.slice(1, s.length) + str.slice(0,1);
      n++
  }
  return result;
}

const isValid = (str) => {
  const stack = [];
  const pair = {
      '(': ')',
      '[': ']',
      '{': '}'
  };

  for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
          stack.push(str[i]); // 여는 괄호일 경우 스택에 push
      } else {
          const compareStr = stack.pop(); // 닫는 괄호일 경우 스택에서 pop하여 짝을 확인
          if (!compareStr || pair[compareStr] !== str[i]) {
              return false; // 짝이 맞지 않으면 올바르지 않은 괄호 문자열
          }
      }
  }
  return stack.length === 0; // 스택이 비어있으면 올바른 괄호 문자열
};