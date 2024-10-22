function solution(priorities, location) {
  let arr = [];

  //location, priorty object배열 생성
  for(let i = 0; i < priorities.length; i++) {
    arr.push({
      index: i,
      priorty: priorities[i]
    });
  }

  let order = 0;
  //data의 value를 비교하며 order count
  while(arr.length > 0) {
    const value = arr.shift();
    //arr에 value.priorty보다 높은게 있다면, 뒤도 돌아보지말고 arr.push(value)
    if(arr.some(v => v.priorty > value.priorty)) {
      arr.push(value);
    } else {
      order++;
      //더 진행할 필요 없이 location과 index와 같은게 있다면 return
      if(value.index === location) {
        return order;
      }
    }

  }
}