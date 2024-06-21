function solution(n, t, m, p) {
  let tubeNumArr = [];
  let str = '';

  //숫자를 string으로 변환한 다음에
  for (let i = 0; i < t * m; i++) {
    str += i.toString(n).toUpperCase();
  }
  //배열로 만든다. (각각 비교하기 위해서)
  const strArr = str.split('');

  for (let j = 0; j < t ; j++) {
    tubeNumArr.push(strArr[(p - 1) + (m * j)]);
  }

  return tubeNumArr.join('')
}