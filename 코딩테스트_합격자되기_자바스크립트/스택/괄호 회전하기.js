const solution = (s) => {
  let result = 0;
  // s의 길이 만큼 pop / push를 진행한다.
  const strArr = s.split('');
  for (let i = 0; i < s.length; i++) {
    // i 만큼 회전
    if(i > 0) {
      const first = strArr.shift();
      strArr.push(first);
    }
    // 괄호 짝이 맞는지 검사한다.
    if(isValid(strArr)) {
      // 맞으면 result를 하나씩 더해준다.
      result += 1;
    }
  }

  return result;
}

/**
 * 괄호 짝 검사
 * @param arr
 * @returns {boolean}
 */
const isValid = (arr) => {
  let stack = [];
  const strPair = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  }

  for (const str of arr) {
    // push isFull
    if(strPair[str]) {
      if (stack.length === arr.length) return false;
      stack.push(str);
    }

    // pop isEmpty
    if(!strPair[str]) {
      // 직전 push한 괄호와 짝이 맞아야 한다.
      const compair = stack.pop();
      if (!compair || strPair[compair] !== str) return false;
    }
  }

  return stack.length === 0;
}


console.log(solution('[](){}'));
console.log(solution('}]()[{'));
console.log(solution('[)(]')); // 예외 케이스
console.log(solution('}}}'));
