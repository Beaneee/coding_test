const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(n, m) {
  const gcdValue = gcd(n, m);
  const lcmValue = (n * m) / gcdValue;

  return [gcdValue, lcmValue]
}