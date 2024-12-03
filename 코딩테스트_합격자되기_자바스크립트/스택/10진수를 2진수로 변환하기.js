const solution = (decimal) => {
  const stack = [];
  let num = decimal;

  while (num > 1) {
    const q = parseInt(num / 2);
    const rest = parseInt(num % 2);

    stack.push(rest);
    if(q === 1) {
      stack.push(q);
    }
    num = q;

  }
  return Number(stack.join(''))
}

console.log(solution(10));
console.log(solution(100));
console.log(solution(12345));

