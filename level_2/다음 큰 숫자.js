function solution(n) {
  let answer = 0;
  //n을 이진수로 변환하고
  let binaryNum = n.toString(2);
  //그걸 배열로 반환한다. -> 1의 갯수를 세기위해서
  let splitStr = binaryNum.split('')
  //1의 갯수
  let count = splitStr.filter((v) => v === '1').length;
  let result = n;
  while(true) {
      result++;
      let resultBinaryNum = result.toString(2);
      let resultSplitStr = resultBinaryNum.split('');
      let resultCount = resultSplitStr.filter((v) => v === '1').length;
      
      if(resultCount === count) break;
  }
  
  return result;
}