function solution(priorities, location) {
  let arr = [];

  //hash map으로 data 생성
  for(let i = 0; i < priorities.length; i++) {
    arr.push({[i] : priorities[i]});
  } 
  
  let queueList = [];

  //data의 value를 비교하며 queuelist 생성
  while(arr.length > 0) {
    const value = arr.shift();
    
    if(arr.length > 0 && Object.values(value) < Object.values(arr[0])) {
      arr.push(value);
    } else {
      queueList.push(value);
    }

  } 
  //location에 해당하는 key index 찾기
  return queueList.findIndex(v => Object.keys(v)[0] === String(location));
}