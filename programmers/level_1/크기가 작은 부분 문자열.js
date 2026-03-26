function solution(t, p) {
  const n = p.length;
  const pNum = Number(p);

  let count = 0;

  for (let i = 0; i <= t.length - n; i++) {
    const num = Number(t.substring(i, i + n));
    if (num <= pNum) count++;
  }

  return count;
}