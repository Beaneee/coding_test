const solution = (s) => {
  const stack = [];
  // 문자열을 순회하면서
  for (let i = 0; i < s.length; i++) {
    // 만약 stack에 마지막 요소와 현재 문자와 같다면
    // isEmpty를 검사하고
    if(stack.length > 0 && s[i] === stack[stack.length - 1]) {
      // pop 진행
      stack.pop();
    } else {
      // isFull
      if (stack.length === s.length) return;
      // 그렇지 않다면 push
      stack.push(s[i]);
    }
  }
  // stack이 비어 있으면 1 아니면 0을 return
  return stack.length === 0 ? 1 : 0
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));
console.log(solution('aaccbccb'));

// stack 자료구조는 현재와 이전 혹은 다음 요소를 비교하는 상황에서 굉장히 유용하다.