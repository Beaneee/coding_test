function solution(clothes) {
  let hash = {};
  let result = 1;
  //hash 생성
  //각 종류별로 (선택하지 않는 경우 포함) 가능한 선택의 수를 계산
  //모든 종류의 선택 가능한 경우의 수를 곱
  //마지막으로 아무것도 입지 않는 경우를 제외
  for(let i = 0; i < clothes.length; i++) {
    const key = clothes[i][1];
    const value = clothes[i][0];

    if(hash[key]) {
      hash[key].push(value);
    } else {
      hash[key] = [value];
    }
  }

  for(key in hash) {
    result *= (hash[key].length + 1); //(의상 수 + 아무것도 선택하지 않은 경우)
  }

  return result - 1 //어떤것도 선택하지 않은 경우의 수 뺴기
}