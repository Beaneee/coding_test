function solution(clothes) {
  let hash = {};
  //key 생성
  for(let i = 0; i < clothes.length; i++) {
    const key = clothes[i][1];
    hash[key] = [];
  }
  //value 생성
  for(let i = 0; i < clothes.length; i++) {
    const key = clothes[i][1];
    const value = clothes[i][0];
    hash[key].push(value);
  }
  console.log(hash);
}