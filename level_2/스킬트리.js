function solution(skill, skill_trees) {
  let result = 0;
  //스킬의 요소들을 뽑고
  const skilsStack = skill_trees.map(v => {
    return v.split('').filter(el => skill.includes(el))
  })

  //가능한 트리인지 확인한다.
  for (let i = 0; i < skilsStack.length; i++) {
    let isValid = true;

    for (let j = 0; j < skilsStack[i].length; j++) {
      if(skill[j] !== skilsStack[i][j]) {
        //하나라도 일치하지 않으면
        isValid = false;
        break
      }
    }

    if(isValid) {
      result += 1;
    }
  }

  return result;
}