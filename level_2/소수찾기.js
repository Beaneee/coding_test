//순열
function permutation(arr, selctionNum) {
  const result = [];
  // n개중 1개를 선택할때는 전체 배열 (base 케이스)
  if(selctionNum === 1) {
      return arr.map((el) => [el]);
  }
  //forEach(currentValue, index, array)
  arr.forEach((fixed, index, origin) => {
      // fixed를 제외한 나머지 배열 중에서
      console.log(index)
      const rest =  [...origin.slice(0, index), ...origin.slice(index + 1)];
      //나머지 배열로 다시 재귀
      const combine = permutation(rest, selctionNum - 1);
      //fixed를 앞에 두고 붙인다.
      const attached = combine.map((el) => [fixed, ...el]);
      result.push(...attached);
  })
  return result
}

// 소수판별법
function isPrime(nums) {

for (let i=2; i < nums; i++) {
    if(nums % i === 0) {
        return false;
    }
}
return nums > 1;
}

function solution(numbers) {
  var answer = 0;
  let arr = numbers.split("");
  let newArr = [];

  //fixed를 설정해줘야 하므로 i=1부터 시작
  for(let i=1; i <= numbers.length; i++) {
      //11과 011은 같은 숫자로 취급합니다. -> Number();
      newArr.push(...permutation(arr, i).map(v => Number(v.join(''))));
  }
  //중복 제거
  const setArr = new Set(newArr);
  
  setArr.forEach(v => {
      if(isPrime(v)) {
          answer ++;
      }
  })

  return answer;
}