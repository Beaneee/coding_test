function solution(answers) {
  var answer = [];
  let sol = [0,0,0];
  let person1 = [1,2,3,4,5];
  let person2 = [2,1,2,3,2,4,2,5];
  let person3 = [3,3,1,1,2,2,4,4,5,5];
  
  
  for (let i = 0; i < answers.length; i++) {
      if(person1[i % person1.length] === answers[i]) {
          sol[0] ++;
      }
      if(person2[i % person2.length] === answers[i]) {
          sol[1] ++;
      } 
      if(person3[i % person3.length] === answers[i]) {
          sol[2] ++;
      } 
  }
  
  
  let maxValue = Math.max(sol[0], sol[1], sol[2]);
  
  for(let j=0; j < sol.length; j++) {
      if(maxValue === sol[j]) {
          answer.push(j+1)
      }
  }

  return answer;
}