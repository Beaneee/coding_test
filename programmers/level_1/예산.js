function solution(d, budget) {
  d.sort();
  let count = budget;
  let result = 0;

  for (const cost of d) {
    if (count < cost) break;
    count = (count - cost);
    result++;
  }

  return result;
}