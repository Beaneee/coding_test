function solution(s) {
  const counts = Array(26).fill(0);
  const strArr = s.split('');
  const aOrder = "a".charCodeAt(0);

  for (const str of strArr) {
    const order = str.charCodeAt(0) - aOrder;
    counts[order] += 1;
  }

  const result = [];

  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < counts[i]; j++) {
      result.push(String.fromCharCode(i + aOrder));
    }
  }

  return result.join('');
}


console.log(solution('hello'))
console.log(solution('algorithm'))