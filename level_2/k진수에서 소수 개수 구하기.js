//0을 기준으로 자른 문자열 배열을 생성하고
//소수인지 판별하는 함수를 만들어서 검사
function solution(n, k) {
  const parseNum = n.toString(k);
  const numArr = parseNum.split('0').filter(Boolean);
  let result = 0;
  numArr.forEach((num) => {
    if(isPrime(Number(num))) {
      result += 1;
    }
  })
  return result;
}

/**
 * 소수 판별
 * @param {*} number  
 */
const isPrime = (number) => {
  if(number <= 1) return false;

  for(let i = 2; i <= Math.sqrt(number); i++) {
    if(number % i === 0) return false;
  }
  return true
}

