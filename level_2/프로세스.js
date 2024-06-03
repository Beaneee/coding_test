function solution(priorities, location) {
  let arr = [];

  //hash map으로 data 생성
  for(let i = 0; i < priorities.length; i++) {
    arr.push({[i] : priorities[i]})
  } 

  let queueList = [];
  
  for(let j = 0; j < priorities.length; j++) {
    queueList.push(arr.shift());
  }
  
}