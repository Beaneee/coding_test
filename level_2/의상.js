function solution(clothes) {
  let hash = {};
  //hash 생성
  for(let i = 0; i < clothes.length; i++) {
    const key = clothes[i][1];
    const value = clothes[i][0];

    if(hash[key]) {
      hash[key].push(value);
    } else {
      hash[key] = [value];
    }
    
  }
  console.log(hash);
}