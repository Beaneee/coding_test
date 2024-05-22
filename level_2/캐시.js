
function solution(cacheSize, cities) {
  let visitedArr = [];
  let time = 0;
  for(let i = 0; i < cities.length; i++) {
    // 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다.
    const city = cities[i].toLowerCase();
    //만약 방문했던 도시가 있다면, 제거하고 뒤에 넣는다.
    if(visitedArr.includes(city)) {
      visitedArr = visitedArr.filter(v => v !== city)
      visitedArr.push(city);
      time += 1;
    } else {
      //만약 방문했던 도시가 없다면, 가장 먼저들어온 것(오래된것)부터 빼고 뒤에 넣는다.
      if(visitedArr.length === cacheSize) {
        visitedArr.shift();
      }
      visitedArr.push(city);
      time += 5;
    }
  }
  return time
}