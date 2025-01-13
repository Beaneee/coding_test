const solution = (a, b) => {
  // a === b
  if(a === b) return a;
  // a < b
  if(a < b) {
    return handleSum(a, b);
  }

  // a > b
  if(a > b) {
    return  handleSum(b, a);
  }
}

const handleSum = (smaller, bigger) => {
  let num = 0;
  for (let i = smaller; i < bigger + 1; i++) {
    num += i;
  }

  return num;
}