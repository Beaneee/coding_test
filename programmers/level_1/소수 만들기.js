function solution(nums) {
  var answer = 0;
  let add = 0;
  let arr = [];
  
  for (let i=0; i < nums.length; i++) {
      for (let j=i+1; j < nums.length; j++) {
          for (let k = j+1; k < nums.length; k++) {
              add = nums[i] + nums[j] + nums[k];
              arr.push(isPrime(add));
          };
      };
  };
  answer = arr.filter(Boolean).length;    
  return answer;
}

// 소수판별법
function isPrime(nums) {
  if(nums === 2) {
      return true;
  }
  
  for (let i=2; i < nums; i++) {
      if(nums % i === 0) {
          return false;
      }
  }
  return true;
}