function solution(people, limit) {
  var answer = 0;
  
  let count = 0; //1명만 탈 수 있는 경우
  let count2 = 0; //2명이 탈 수 있는 경우

  const length = people.length;
  
  for(i = 0; i < length; i++) {
      const min = Math.min(...people);
      
      if(min <= limit - min) {
          const minIdx = people.findIndex((v) => v === min);
          people.splice(minIdx, 1);
          count2++
      } else {
          count = count + people.length;
          people.splice(0, people.length);
      }
  }
  return count + (count2 % 2 === 0 ? count2 / 2 : count2);
}