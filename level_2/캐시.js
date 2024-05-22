function solution(cacheSize, cities) {
  let visitedArr = [];
  let time = 0;
  for(let i = 0; i < cities.length; i++) {

    if(visitedArr.length === cacheSize) {
      //방문한적이 있다면
      if(visitedArr.includes(cities[i])) {
        visitedArr = visitedArr.filter(v => v !== cities[i]);
        visitedArr.unshift(cities[i]);
        time += 1;
      } else {
        visitedArr.pop();
        visitedArr.push(cities[i]);
        time += 5;
      }
    } else {
      visitedArr.push(cities[i]);
    }
  }
  return time
}