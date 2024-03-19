function solution(k, tangerine) {
  let answer = 0;
  const countMap = {};
  //tangerine에 있는 크기 갯수 구하기
  for(let i = 0; i < tangerine.length; i++) {
      const value = tangerine[i];
      countMap[value] = (countMap[value] || 0) + 1;
  }
  
  //value가 높은 순서대로 배열 만들고
  const countArr= Object.entries(countMap).map((v) => {
      const key = v[0];
      const value = v[1];
      
      return {
          key,
          value
      }
  }).sort((a,b) => b.value - a.value);
  
  let count = 0;
  //value가 높은 갯수 만큼 제거하고 최솟값 구하기
  for(let i = 0; i < countArr.length; i++) {
      k = k - countArr[i].value;
      count++
      
      if(k <= 0) {
          return count
      }
  }
  
}