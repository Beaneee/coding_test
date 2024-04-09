function solution(n) {
  const arr = String(n).split('');
  let sum = 0;
  
  arr.forEach(v => {
    sum += Number(v)
  });

  return sum
}