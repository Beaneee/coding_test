function solution (answers) {
  // 각 수포자들이 찍는 방식을
  const p1 = [1,2,3,4,5];
  const p2 = [2,1,2,3,2,4,2,5];
  const p3 = [3,3,1,1,2,2,4,4,5,5];

  const sol = [0, 0, 0];

  // 문제를 각각 순회해서
  for (let i = 0; i < answers.length; i++) {
    // 맞는 문제를 저장한다.

    //만약에 문제 수가 위에 배열보다 훨씬 더 넘어버리면~
    if(answers[i] === p1[i % p1.length]) {
      sol[0] += 1;
    }

    if(answers[i] === p2[i % p2.length]) {
      sol[1] += 1;
    }

    if(answers[i] === p3[i % p3.length]) {
      sol[2] += 1;
    }
  }

  const maxValue = Math.max(...sol);

  // 문제를 가장 많이 맞춘 사람을 반환
  return sol.map((v, idx) => {
    if(v === maxValue) return idx + 1;
  }).filter(Boolean);
}