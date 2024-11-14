const solution = (s) => {
  const strArr = s.split('');
  let stack = [];

  // forEach는 루프 중간에 return을 할 수 없다. 명심하자.
  // strArr.forEach(str => {
  //
  //   if(str === '(') {
  //     if(stack.length === strArr.length) return false; // isFull
  //     stack.push(str);
  //   }
  //
  //   if(str === ')') {
  //     if(stack.length === 0) return false; // isEmpty
  //     stack.pop();
  //   }
  //
  // })

  for (const str of strArr) {
    if(str === '(') {
      if(stack.length === strArr.length) return false; // isFull
      stack.push(str);
    }

    if(str === ')') {
      if(stack.length === 0) return false; // isEmpty
      stack.pop();
    }
  }

  return stack.length === 0
}

console.log(solution('(())()'));
console.log(solution('((())()'));
console.log(solution('()()('));
console.log(solution('(((((('));