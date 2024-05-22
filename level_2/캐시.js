function solution(cacheSize, cities) {
  let visitedArr = [];
  let time = 0;
  for(let i = 0; i < cities.length; i++) {
    //만약 방문했던 도시가 있다면, 제거하고 뒤에 넣는다.
    if(visitedArr.includes(cities[i])) {
      visitedArr = visitedArr.filter(v => v !== cities[i])
      visitedArr.push(cities[i]);
      time += 1;
    } else {
      //만약 방문했던 도시가 없다면, 가장 먼저들어온 것(오래된것)부터 빼고 뒤에 넣는다.
      if(visitedArr.length === cacheSize) {
        visitedArr.shift();
      }
      visitedArr.push(cities[i]);
      time += 5;
    }
  }
  return time
}