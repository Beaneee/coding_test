function solution(k, dungeons) {
  //다 어떻게 돌 수 있을까,,,,?
  //순열로 풀어야 할 거 같은데
  const totalArr = getPermutations(dungeons, dungeons.length);
  const visitedArr = [];

  totalArr.forEach((arr) => {
    let fatigue = k;
    let visitedCount = 0;
    arr.forEach((v) => {
      const minFatigue = v[0];
      const requiredFatigue = v[1];
      if(minFatigue > fatigue) return;
      fatigue -= requiredFatigue;
      visitedCount++;
    })
    visitedArr.push(visitedCount);
  })
  visitedArr.sort((a, b) => b - a);
  return visitedArr[0]
}

//순열
const getPermutations = (arr, selectNumber) => {
  const result = [];

  //n개 중에 1개를 선택하는건 순서가 의미가 없으므로 바로 return
  if(selectNumber === 1) {
    return arr.map((el) => [el])
  }

  arr.forEach((fixed, index, origin) => {
    //fixed를 제외한 나머지
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    //나머지에 대해서 순열을 구하고
    const permutations = getPermutations(rest, selectNumber - 1);
    //fixed를 붙여준다.
    const attached = permutations.map(permutation => [fixed, ...permutation]);
    //result에 개별 요소들을 push
    result.push(...attached);
  })
  return result;
}
