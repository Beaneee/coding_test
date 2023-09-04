function solution(n) { 
  let count = countOfOne(n);
  let result = n;
  while(true) {
      result++;    
      let resultCount = countOfOne(result);
      if(resultCount === count) break;
  }
  
  return result;
}

function countOfOne(num) {
  let binaryNum = num.toString(2);
  let splitStr = binaryNum.split('');
  let count = splitStr.filter((v) => v === '1').length;
  return count;
}