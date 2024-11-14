const solution = (s) => {
  const strArr = s.split('');
  let stack = [];

  strArr.forEach(str => {

    if(str === '(') {
      if(stack.length === strArr.length) return false; // isFull
      stack.push(str);
    }

    if(str === ')') {
      if(stack.length === 0) return false; // isEmpty
      stack.pop();
    }

  })

  return stack.length === 0
}

console.log(solution('(())()'));
console.log(solution('((())()'));
console.log(solution('()())'));
console.log(solution('(((((('));