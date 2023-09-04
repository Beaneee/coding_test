//효율성 테스트에서 걸림;;
// function solution(n) {
//   let answer = 0;    
//   let startNum = n / n;
//   let count = 1;
//   let total = 0;
  
//   while(count <= n) {
//       total = total + startNum;
      
//       if(total >= n) {
//           if(total === n) answer++;
//           total = 0;
//           count++;     
//           startNum = count;
//       } else {
//           startNum++;
//       }
//   }
  
//   return answer;
// }

// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와 주어진 수의 홀수인 약수 갯수는 같다.
// 음,,,이런 방법이 있구나라고 외워두자.
function solution(n) {
  let answer = 0;    
  for (let i = 1; i <= num; i++) {
    if ((num % i == 0) && (i % 2 == 1)) {
        answer++;
    }
  }

 return answer;
}