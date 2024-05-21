function solution(cacheSize, cities) {
  let visitedArr = [];
  let time = 0;
  for(let i = 0; i < cities.length; i++) {
    visitedArr.push(cities[i]);
    if(visitedArr.length === cacheSize) {
      //가장 맨 앞
      if(visitedArr.includes(cities[i])) {
        visitedArr = visitedArr.filter(v => v !== cities[i]);
        visitedArr.unshift(cities[i]);
        time++;
      } else {
        visitedArr.pop();
        visitedArr.push(cities[i]);
        time = time + 5;
      }
      console.log('visitedArr', visitedArr);
    }
  }
}