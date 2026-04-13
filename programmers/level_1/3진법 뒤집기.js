function solution(n) {
  const convert3 = n.toString(3).split('').reverse().join('');
  return parseInt(convert3, 3);
}