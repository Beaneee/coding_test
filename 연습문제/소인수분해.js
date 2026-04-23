function solution(n){
  const factors = [];

  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  if (n > 1) factors.push(n);
  return factors;
}

console.log(solution(180));
console.log(solution(2));
console.log(solution(13));