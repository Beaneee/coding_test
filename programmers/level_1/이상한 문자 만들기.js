function solution(s) {
  const strArr = s.split(' ');
  const result = [];

  for (const str of strArr) {
    let parseStr = '';
    for (let i = 0; i < str.length; i++) {
      // 짝수
      if (i === 0 || i % 2 === 0) {
        console.log('짝수', str[i], i);
        parseStr += str[i].toUpperCase();
      }

      // 홀수
      if (i % 2 === 1) {
        parseStr += str[i].toLowerCase();
      }
    }
    result.push(parseStr);
  }

  return result.join(' ');
}