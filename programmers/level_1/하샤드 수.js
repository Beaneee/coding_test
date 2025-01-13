function solution(x) {
  const numStrArr = String(x).split('');

  let sum = 0;

  for (const num of numStrArr) {
    sum += Number(num);
  }

  return x % sum === 0
}