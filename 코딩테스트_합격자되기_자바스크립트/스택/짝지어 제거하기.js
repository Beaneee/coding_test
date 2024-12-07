const solution = (s) => {
  const stack = [];
  // 문자열을 순회하면서
  for (let i = 0; i < s.length; i++) {
    // 문자를 stack에 넣고
    stack.push(s[i]);

    // 문자를 하나 뽑아서 다음 문자열과 같은지 비교한다.
    const sliceStr = s.slice(i + 1, i + 2);
    // 같다면
    if(sliceStr && s[i] === sliceStr) {
      // 두 문자열을 뽑아주고
      stack.pop();
      stack.pop();
      // 다다음 문자열로 넘어간다. (이미 같은 문자열은 뽑았다는 가정하에)
      i++
    }
    // 아니라면 유지한다.
  }

  // stack이 비어 있으면 1 아니면 0을 return
  return stack.length === 0 ? 1 : 0
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));